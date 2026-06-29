import { useEffect, useState } from "react";
import MainLayout from "../../../layouts/MainLayout";
import AdminCrudPage from "../../../components/AdminCrudPage/AdminCrudPage";
import { citaService } from "../../../services/citaService";
import { userService } from "../../../services/UserService";
import { mascotaService } from "../../../services/mascotaService";
import { habitacionService } from "../../../services/habitacionService";

function Citas() {
  const [usuarios, setUsuarios] = useState([]);
  const [mascotas, setMascotas] = useState([]);
  const [habitaciones, setHabitaciones] = useState([]);

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState("");
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState("");

  const hoy = new Date().toISOString().split("T")[0];

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const usuariosResponse = await userService.getAll();
      const mascotasResponse = await mascotaService.getAll();
      const habitacionesResponse = await habitacionService.getAll();

      setUsuarios(
        Array.isArray(usuariosResponse.data)
          ? usuariosResponse.data
          : usuariosResponse.data.data || [],
      );
      setMascotas(
        Array.isArray(mascotasResponse.data)
          ? mascotasResponse.data
          : mascotasResponse.data.data || [],
      );
      setHabitaciones(
        Array.isArray(habitacionesResponse.data)
          ? habitacionesResponse.data
          : habitacionesResponse.data.data || [],
      );
    } catch (error) {
      console.error("Error cargando datos de citas:", error);
    }
  };

  const mascotasDelUsuario = mascotas.filter(
    (mascota) =>
      Number(mascota.userId || mascota.user?.id) ===
      Number(usuarioSeleccionado),
  );

  const mascotaActual = mascotas.find(
    (mascota) => Number(mascota.id) === Number(mascotaSeleccionada),
  );

  const tipoMascotaId =
    mascotaActual?.tipoMascotaId || mascotaActual?.tipoMascota?.id;

  const habitacionesDelTipo = habitaciones.filter(
    (habitacion) =>
      Number(habitacion.tipoMascotaId || habitacion.tipoMascota?.id) ===
      Number(tipoMascotaId),
  );

  const obtenerEstadoCita = (fechaInicio, fechaSalida) => {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const inicio = new Date(fechaInicio);
    inicio.setHours(0, 0, 0, 0);

    const salida = new Date(fechaSalida);
    salida.setHours(0, 0, 0, 0);

    if (hoy < inicio) return "Pendiente";
    if (hoy >= inicio && hoy <= salida) return "En curso";
    return "Finalizada";
  };

  return (
    <MainLayout>
      <AdminCrudPage
        title="Citas"
        service={citaService}
        initialForm={{
          fechaInicio: hoy,
          fechaSalida: hoy,
          userId: "",
          mascotaId: "",
          habitacionId: "",
        }}
        onFieldChange={(name, value) => {
          if (name === "userId") {
            setUsuarioSeleccionado(value);
            setMascotaSeleccionada("");
          }

          if (name === "mascotaId") {
            setMascotaSeleccionada(value);
          }
        }}
        fields={[
          {
            name: "fechaInicio",
            label: "Fecha inicio",
            type: "date",
            required: true,
            min: hoy,
          },
          {
            name: "fechaSalida",
            label: "Fecha salida",
            type: "date",
            required: true,
            min: (form) => form.fechaInicio || hoy,
            disabled: (form) => !form.fechaInicio,
          },
          {
            name: "userId",
            label: "Usuario",
            type: "select",
            required: true,
            options: usuarios.map((user) => ({
              value: user.id,
              label: user.nombre,
            })),
          },
          {
            name: "mascotaId",
            label: "Mascota",
            type: "select",
            required: true,
            disabled: !usuarioSeleccionado,
            options: mascotasDelUsuario.map((mascota) => ({
              value: mascota.id,
              label: mascota.nombre,
            })),
          },
          {
            name: "habitacionId",
            label: "Habitación",
            type: "select",
            required: true,
            disabled: !mascotaSeleccionada,
            options: habitacionesDelTipo.map((habitacion) => ({
              value: habitacion.id,
              label: habitacion.descripcion || `Habitación ${habitacion.id}`,
            })),
          },
        ]}
        columns={[
          { label: "IDENTIFICACIÓN", value: "id" },
          {
            label: "Inicio",
            value: (item) => item.fechaInicio?.split("T")[0],
          },
          {
            label: "Salida",
            value: (item) => item.fechaSalida?.split("T")[0],
          },
          {
            label: "Usuario",
            value: (item) => item.user?.nombre || item.usuario?.nombre || "",
          },
          {
            label: "Mascota",
            value: (item) => item.mascota?.nombre || "",
          },
          {
            label: "Habitación",
            value: (item) =>
              item.habitacion?.descripcion || `Habitación ${item.habitacionId}`,
          },
          {
            label: "Estado",
            value: (item) =>
              obtenerEstadoCita(item.fechaInicio, item.fechaSalida),
          },
        ]}
        beforeSubmit={(form) => {
          if (form.fechaSalida < form.fechaInicio) {
            throw new Error(
              "La fecha de salida no puede ser anterior a la fecha de inicio.",
            );
          }

          return {
            fechaInicio: form.fechaInicio,
            fechaSalida: form.fechaSalida,
            userId: Number(form.userId),
            mascotaId: Number(form.mascotaId),
            habitacionId: Number(form.habitacionId),
          };
        }}
      />
    </MainLayout>
  );
}

export default Citas;
