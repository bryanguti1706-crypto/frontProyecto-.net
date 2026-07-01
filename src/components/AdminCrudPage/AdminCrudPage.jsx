import { useEffect, useState } from "react";

function AdminCrudPage({
  title,
  fields = [],
  columns = [],
  service,
  initialForm = {},
  beforeSubmit,
  onFieldChange,
}) {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadItems = async () => {
    try {
      const response = await service.getAll();

      const data = Array.isArray(response.data)
        ? response.data
        : response.data.data || [];

      setItems(data);
    } catch (err) {
      console.error(err);
      setError("Error al cargar los datos.");
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const newForm = {
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
            ? Number(value)
            : value,
    };

    if (name === "fechaInicio") {
      newForm.fechaSalida = value;
    }

    setForm(newForm);

    if (onFieldChange) {
      onFieldChange(name, value, newForm);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const dataToSend = beforeSubmit ? beforeSubmit(form) : form;

    try {
      if (editingId) {
        await service.update(editingId, { ...dataToSend, id: editingId });
        setMessage(`${title} actualizado correctamente.`);
      } else {
        await service.create(dataToSend);
        setMessage(`${title} creado correctamente.`);
      }

      resetForm();
      loadItems();
    } catch (err) {
      console.error(err.response?.data);
      setError(
        err.response?.data?.message ||
          JSON.stringify(err.response?.data) ||
          "Error al guardar.",
      );
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);

    const itemLimpio = { ...item };

    if ("password" in initialForm) {
      itemLimpio.password = "";
    }

    setForm({ ...initialForm, ...itemLimpio });
  };

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar este registro?")) return;

    try {
      await service.remove(id);
      setMessage(`${title} eliminado correctamente.`);
      loadItems();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Error al eliminar.");
    }
  };

  return (
    <section className="admin-page">
      <h1 className="admin-title">Gestión de {title}</h1>

      {message && <div className="alert-success-salem">{message}</div>}
      {error && <div className="alert-error-salem">{error}</div>}
      {fields.length > 0 && (
        <form className="admin-form" onSubmit={handleSubmit}>
          <h4>{editingId ? "Editar registro" : "Crear registro"}</h4>

          <div className="form-grid-salem">
            {fields
              .filter((field) => !(editingId && field.name === "password"))
              .map((field) => (
                <div className="form-group-salem" key={field.name}>
                  {field.type === "checkbox" ? (
                    <div className="form-check-salem">
                      <input
                        type="checkbox"
                        name={field.name}
                        checked={form[field.name] || false}
                        onChange={handleChange}
                      />
                      <label>{field.label}</label>
                    </div>
                  ) : (
                    <>
                      <label>{field.label}</label>

                      {field.type === "select" ? (
                        <select
                          name={field.name}
                          value={form[field.name] || ""}
                          onChange={handleChange}
                          required={field.required}
                          disabled={
                            typeof field.disabled === "function"
                              ? field.disabled(form)
                              : field.disabled
                          }
                        >
                          <option value="">Seleccione...</option>

                          {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type || "text"}
                          name={field.name}
                          value={form[field.name] || ""}
                          min={
                            typeof field.min === "function"
                              ? field.min(form)
                              : field.min
                          }
                          disabled={
                            typeof field.disabled === "function"
                              ? field.disabled(form)
                              : field.disabled
                          }
                          onChange={handleChange}
                          required={field.required}
                        />
                      )}
                    </>
                  )}
                </div>
              ))}
          </div>

          <div className="form-actions-salem">
            <button className="btn-save-salem" type="submit">
              {editingId ? "Actualizar" : "Guardar"}
            </button>

            {editingId && (
              <button
                className="btn-cancel-salem"
                type="button"
                onClick={resetForm}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      )}

      <h2 className="admin-subtitle">{title} registrados</h2>

      <div className="table-container-salem">
        <table className="table-salem">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.label}>{col.label}</th>
              ))}
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {columns.map((col) => (
                  <td key={col.label}>
                    {typeof col.value === "function"
                      ? col.value(item)
                      : item[col.value]}
                  </td>
                ))}

                <td>
                  <button
                    className="btn-edit-salem"
                    onClick={() => handleEdit(item)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn-delete-salem"
                    onClick={() => handleDelete(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={columns.length + 1} className="empty-table">
                  No hay registros.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminCrudPage;
