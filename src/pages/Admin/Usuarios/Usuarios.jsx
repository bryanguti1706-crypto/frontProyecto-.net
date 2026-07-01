import MainLayout from "../../../layouts/MainLayout";
import AdminCrudPage from "../../../components/AdminCrudPage/AdminCrudPage";
import { userService } from "../../../services/UserService";
function Usuarios() {
  return (
    <MainLayout>
      <AdminCrudPage
        title="Usuarios"
        service={userService}
        initialForm={{
          nombre: "",
          correo: "",
          password: "",
          role: "",
        }}
        fields={[
          { name: "nombre", label: "Nombre", required: true },
          { name: "correo", label: "Correo", type: "email", required: true },
          { name: "password", label: "Contraseña", type: "password" },
          {
            name: "role",
            label: "Rol",
            type: "select",
            required: true,
            options: [
              {
                value: "ADMIN",
                label: "Administración",
              },
              {
                value: "USER",
                label: "Usuario",
              },
            ],
          },
        ]}
        columns={[
          { label: "ID", value: "id" },
          { label: "Nombre", value: "nombre" },
          { label: "Correo", value: "correo" },
          { label: "Rol", value: "role" },
        ]}
      />
    </MainLayout>
  );
}

export default Usuarios;
