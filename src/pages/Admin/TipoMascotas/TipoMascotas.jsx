import MainLayout from '../../../layouts/MainLayout'
import AdminCrudPage from '../../../components/AdminCrudPage/AdminCrudPage'
import { tipoMascotaService } from '../../../services/tipoMascotaService'

function TipoMascotas() {
  return (
    <MainLayout>
      <AdminCrudPage
        title="Tipos de Mascota"
        service={tipoMascotaService}
        initialForm={{ nombreTipo: '' }}
        fields={[
          { name: 'nombreTipo', label: 'Nombre del tipo', required: true },
        ]}
        columns={[
          { label: 'ID', value: 'id' },
          { label: 'Nombre', value: 'nombreTipo' },
        ]}
      />
    </MainLayout>
  )
}

export default TipoMascotas