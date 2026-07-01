import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/LogSalem.png";

function AppNavbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const isLogged = !!token;
  const isAdmin = role === "ADMIN";

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <nav className="navbar-salem">
      <Link className="brand" to="/inicio">
        <img src={logo} alt="Logo Salem" className="brand-logo" />
        <span>La Guardería de Salem</span>
      </Link>

      <div className="menu">
        <NavLink to="/inicio">Inicio</NavLink>
        <NavLink to="/quienes-somos">Quiénes somos</NavLink>
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
            <NavLink to="/registro">Registrarse</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default AppNavbar;