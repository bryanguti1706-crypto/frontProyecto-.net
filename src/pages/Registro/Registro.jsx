import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmarPassword, setConfirmarPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const navigate = useNavigate();

    const registrar = async (e) => {

        e.preventDefault();

        if (password !== confirmarPassword) {
            setMensaje("Las contraseñas no coinciden");
            return;
        }

        try {

            await axios.post(
                "https://localhost:7223/api/Users",
                {
                    nombre: nombre,
                    correo: correo,
                    password: password,
                    role: "USER",
                    activo: true
                }
            );

            alert("Usuario registrado correctamente");

            navigate("/");

        } catch (error) {

            console.log(error);

            setMensaje("Error al registrar el usuario");

        }

    };

    return (
        <div className="container">
            <div
                className="signup-container"
                style={{ maxWidth: "500px", margin: "40px auto" }}
            >
                <h2 className="text-center mb-4">
                    Registro en La Guardería de Salem
                </h2>

                <div id="mensaje"></div>

                <form onSubmit={registrar}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                            Nombre completo:
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="correo" className="form-label">
                            Correo electrónico:
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Contraseña:
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label
                            htmlFor="password_confirmation"
                            className="form-label"
                        >
                            Confirmar contraseña:
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            value={confirmarPassword}
                            onChange={(e) => setConfirmarPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100 mb-3"
                    >
                        Registrarse
                    </button>
                </form>

                <div className="text-center">
                   
                        
                        <Link
                            to="/"
                            className="text-decoration-none fw-semibold"
                        >
                            Volver
                        </Link>
                    
                </div>
            </div>

            <footer className="text-center mt-5">
                <p>© 2026 La Guardería de Salem</p>
            </footer>
        </div>
    );
}

export default Register;