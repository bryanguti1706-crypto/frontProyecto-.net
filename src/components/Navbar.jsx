import "../styles/navbar.css";
function Navbar() {
    return (
        <nav className="navbar-salem">
            <div className="logo-container">
                <img
                    src="/imagenes/LogSalem.png"
                    alt="La Guarder�a de Salem"
                    className="logo"
                />

                <h1>La Guarderia de Salem</h1>
            </div>

            <div className="menu">
                <button>Home</button>
                <button>About Us</button>
                <button>Register</button>
                <button>Login</button>
            </div>
        </nav>
    );
}

export default Navbar;