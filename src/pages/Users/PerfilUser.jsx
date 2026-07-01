import MainLayout from "../../layouts/MainLayout";
import AdminCrudPage from "../../components/AdminCrudPage/AdminCrudPage";
import { userProfileService } from "../../services/UserProfileService";

function PerfilUser() {
  const userId = localStorage.getItem("userId") || 1;

  const profileServiceAdapter = {
    getAll: async () => {
      const res = await userProfileService.getProfile(userId);
      return { success: true, data: res.data ? [res.data] : [] };
    },
    update: (id, data) => userProfileService.updateProfile(userId, data),
  };

  return (
    <MainLayout>
      <AdminCrudPage
        title="Mi Perfil"
        service={profileServiceAdapter}
        initialForm={{ nombre: "", correo: "", password: "" }}
        fields={[
          { name: "nombre", label: "Nombre", required: true },
          { name: "correo", label: "Correo", type: "email", required: true },
          { name: "password", label: "Contraseña", type: "password" },
        ]}
        columns={[
          { label: "Nombre", value: "nombre" },
          { label: "Correo", value: "correo" },
        ]}
      />
    </MainLayout>
  );
}

export default PerfilUser;
