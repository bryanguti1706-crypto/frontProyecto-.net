import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute";
import Inicio from './pages/Inicio/Inicio.jsx'
import Usuarios from './pages/Admin/Usuarios/Usuarios.jsx'
import TipoMascotas from './pages/Admin/TipoMascotas/TipoMascotas.jsx'
import Habitaciones from './pages/Admin/Habitaciones/Habitaciones.jsx'
import Mascotas from './pages/Admin/Mascotas/Mascotas.jsx'
import Citas from './pages/Admin/Citas/Citas.jsx'
import QuienesSomos from './pages/Inicio/Quienes.jsx'


// Cliente (carpeta Users)
import PerfilUser from "./pages/Users/PerfilUser.jsx";
import MisMascotas from "./pages/Users/MisMascotas.jsx";
import MisCitas from "./pages/Users/MisCitas.jsx";
import Navbar from "./components/Navbar/AppNavbar.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Registro/Registro.jsx";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Usuarios />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/tipomascotas"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <TipoMascotas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/habitaciones"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Habitaciones />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/mascotas"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Mascotas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/citas"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <Citas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/perfil"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <PerfilUser />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mis-mascotas"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <MisMascotas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mis-citas"
          element={
            <ProtectedRoute allowedRoles={["USER"]}>
              <MisCitas />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App