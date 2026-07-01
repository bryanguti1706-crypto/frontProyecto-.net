import MainLayout from "../../layouts/MainLayout";
import AdminCrudPage from "../../components/AdminCrudPage/AdminCrudPage";
import { userProfileService } from "../../services/UserProfileService";

function MisCitas() {
  const userId = localStorage.getItem("userId") || 1;

  const citasServiceAdapter = {
    getAll: async () => {
      const res = await userProfileService.getMisCitas(userId);
      const data = Array.isArray(res.data) ? res.data : [];
      return { success: true, data };
    },
  };

  return (
    <MainLayout>
      <AdminCrudPage
        title="Mis Citas"
        service={citasServiceAdapter}
        columns={[
          { label: "Fecha", value: "fecha" },
          { label: "Descripción", value: "descripcion" },
          { label: "Estado", value: "estado" },
        ]}
      />
    </MainLayout>
  );
}

export default MisCitas;

