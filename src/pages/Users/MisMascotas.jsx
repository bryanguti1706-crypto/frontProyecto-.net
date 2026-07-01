import MainLayout from "../../layouts/MainLayout";
import AdminCrudPage from "../../components/AdminCrudPage/AdminCrudPage";
import { userProfileService } from "../../services/UserProfileService";

function MisMascotas() {
  const userId = localStorage.getItem("userId") || 1;

  const mascotasServiceAdapter = {
    getAll: async () => {
      const res = await userProfileService.getMisMascotas(userId);
      // Aseguramos que data sea un array
      const data = Array.isArray(res.data) ? res.data : [];
      return { success: true, data };
    },
  };

  return (
    <MainLayout>
      <AdminCrudPage
        title="Mis Mascotas"
        service={mascotasServiceAdapter}
        columns={[
          { label: "Nombre", value: "nombre" },
          { label: "Tipo", value: "tipo" },
          { label: "Edad", value: "edad" },
        ]}
      />
    </MainLayout>
  );
}

export default MisMascotas;

