import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/LogSalem.png'

function AppNavbar() {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user') || 'null')

  const isLogged = !!token
  const isAdmin = user?.role === 'admin' || user?.role === 'ADMIN'

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <nav className="navbar-salem">
      <Link className="brand" to="/">
        <img src={logo} alt="Logo Salem" className="brand-logo" />
        <span>La Guardería de Salem</span>
      </Link>

      <div className="menu">
        <NavLink to="/Inicio">Inicio</NavLink>
        <NavLink to="/quienes-somos">Quiénes somos</NavLink>
        <NavLink to="/adoptar">Adoptar</NavLink>

        {isLogged && isAdmin && (
          <details className="dropdown">
            <summary>Administración</summary>

            <div className="dropdown-content">
              <NavLink to="/admin/users">Usuarios</NavLink>
              <NavLink to="/admin/tipomascotas">Tipos</NavLink>
              <NavLink to="/admin/habitaciones">Habitaciones</NavLink>
              <NavLink to="/admin/mascotas">Mascotas</NavLink>
              <NavLink to="/admin/citas">Citas</NavLink>
            </div>
          </details>
        )}

        {isLogged ? (
          <>
            <NavLink to="/perfil">Perfil</NavLink>

            <button type="button" className="btn-logout" onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/Registro">Registrarse</NavLink>
          </>
        )}
      </div>
    </nav>
  )
}

export default AppNavbar