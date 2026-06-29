import { useEffect, useState } from 'react'
import MainLayout from '../../../layouts/MainLayout'
import AdminCrudPage from '../../../components/AdminCrudPage/AdminCrudPage'
import { habitacionService } from '../../../services/habitacionService'
import { tipoMascotaService } from '../../../services/tipoMascotaService'

function Habitaciones() {
  const [tipos, setTipos] = useState([])

  useEffect(() => {
    tipoMascotaService.getAll().then((res) => {
      setTipos(res.data.data || [])
    })
  }, [])

  return (
    <MainLayout>
      <AdminCrudPage
        title="Habitaciones"
        service={habitacionService}
        initialForm={{
          descripcion: '',
          tipoMascotaId: '',
        }}
        fields={[
          { name: 'descripcion', label: 'Descripción', required: true },
          {
            name: 'tipoMascotaId',
            label: 'Tipo de mascota',
            type: 'select',
            required: true,
            options: tipos.map((t) => ({
              value: t.id,
              label: t.nombreTipo,
            })),
          },
        ]}
        columns={[
          { label: 'ID', value: 'id' },
          { label: 'Descripción', value: 'descripcion' },
          {
            label: 'Tipo Mascota',
            value: (h) => h.tipoMascota?.nombreTipo || 'Sin tipo',
          },
        ]}
      />
    </MainLayout>
  )
}

export default Habitaciones