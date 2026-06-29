import { useEffect, useState } from "react";
import MainLayout from "../../../layouts/MainLayout";
import AdminCrudPage from "../../../components/AdminCrudPage/AdminCrudPage";
import { mascotaService } from "../../../services/mascotaService";
import { userService } from "../../../services/UserService";
import { tipoMascotaService } from "../../../services/tipoMascotaService";

function Mascotas() {
  const [usuarios, setUsuarios] = useState([]);
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const usuariosResponse = await userService.getAll();
      const tiposResponse = await tipoMascotaService.getAll();

      setUsuarios(
        Array.isArray(usuariosResponse.data)
          ? usuariosResponse.data
          : usuariosResponse.data.data || [],
      );
      setTipos(
        Array.isArray(tiposResponse.data)
          ? tiposResponse.data
          : tiposResponse.data.data || [],
      );
    } catch (error) {
      console.error("Error cargando usuarios o tipos:", error);
    }
  };

  return (
    <MainLayout>
      <AdminCrudPage
        title="mascotas"
        service={mascotaService}
        initialForm={{
          nombre: "",
          peso: "",
          altura: "",
          descripcion: "",
          userId: "",
          tipoMascotaId: "",
          enAdopcion: false,
        }}
        fields={[
          { name: "nombre", label: "Nombre", required: true },
          { name: "peso", label: "Peso", type: "number", required: true },
          { name: "altura", label: "Altura", type: "number", required: true },
          { name: "descripcion", label: "Descripción", required: true },

          {
            name: "userId",
            label: "Usuario",
            type: "select",
            required: false,
            options: [
              { value: 0, label: "En adopción" },
              ...usuarios.map((user) => ({
                value: user.id,
                label: user.nombre,
              })),
            ],
          },

          {
            name: "tipoMascotaId",
            label: "Tipo de mascota",
            type: "select",
            required: true,
            options: tipos.map((tipo) => ({
              value: tipo.id,
              label: tipo.nombreTipo || tipo.nombre_tipo || tipo.nombre,
            })),
          },
        ]}
        columns={[
          { label: "IDENTIFICACIÓN", value: "id" },
          { label: "Nombre", value: "nombre" },
          { label: "Peso", value: "peso" },
          { label: "Altura", value: "altura" },
          {
            label: "Dueño",
            value: (item) =>
              item.user?.nombre ||
              item.usuario?.nombre ||
              item.dueno?.nombre ||
              "En adopción",
          },
          {
            label: "Tipo",
            value: (item) =>
              item.tipoMascota?.nombreTipo ||
              item.tipoMascota?.nombre_tipo ||
              item.tipoMascota?.nombre ||
              "",
          },
        ]}
        beforeSubmit={(form) => ({
          nombre: form.nombre,
          peso: Number(form.peso),
          altura: Number(form.altura),
          descripcion: form.descripcion,
          userId: Number(form.userId) === 0 ? null : Number(form.userId),
          tipoMascotaId: Number(form.tipoMascotaId),
        })}
      />
    </MainLayout>
  );
}

export default Mascotas;
