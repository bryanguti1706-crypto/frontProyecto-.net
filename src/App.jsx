import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio/Inicio.jsx'
import Usuarios from './pages/Admin/Usuarios/Usuarios.jsx'
import TipoMascotas from './pages/Admin/TipoMascotas/TipoMascotas.jsx'
import Habitaciones from './pages/Admin/Habitaciones/Habitaciones.jsx'
import Mascotas from './pages/Admin/Mascotas/Mascotas.jsx'
import Citas from './pages/Admin/Citas/Citas.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/admin/users" element={<Usuarios />} />
        <Route path="/admin/tipomascotas" element={<TipoMascotas />} />
        <Route path="/admin/habitaciones" element={<Habitaciones />} />
        <Route path="/admin/mascotas" element={<Mascotas />} />
        <Route path="/admin/citas" element={<Citas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App