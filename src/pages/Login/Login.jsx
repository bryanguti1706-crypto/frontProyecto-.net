import "../../styles/style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();
    const iniciarSesion = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(
                "https://localhost:7223/api/Auth/login",
                {
                    correo,
                    password
                }

            ); console.log("RESPUESTA COMPLETA:", response.data);

            localStorage.setItem("token", response.data.token);

            localStorage.setItem(
                "usuario",
                JSON.stringify(response.data.usuario)
            );

            alert("Login correcto");

            console.log("ROLE:", response.data.role);
            if (response.data.role === "ADMIN") {
                navigate("/admin/users");
            } else {
                navigate("/user"); 
            }

        } catch {

            setMensaje("Correo o contrase�a incorrectos");

        }
    };

    return (

        
        <div className="page">
            <div className="login-negroni">
                <div className="login-card">
                    <div className="card-top">
                        <h3>Bienvenido</h3>
                        <p>Inicia sesion para acceder a tu cuenta</p>
                    </div>

                    <div className="card-body">
                        <div id="mensaje"></div>

                        <form onSubmit={iniciarSesion}>
                            <div className="login-input">
                                <span className="input-icon">
                                    <i className="bi bi-person-fill"></i>
                                </span>

                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="login-input">
                                <span className="input-icon">
                                    <i className="bi bi-lock-fill"></i>
                                </span>

                                <input
                                    className="form-control"
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Ingresar

                            </button>




                            <div className="divider my-3">
                                <span></span>
                            </div>

                            <div className="text-center mt-2 small">
                                No tienes cuenta?
                                <Link to="/Registro" className="fw-semibold">
                                    {" "}Regístrate aquí
                                </Link>
                            </div>
                        </form>
                    </div>

                </div>


            </div>
            <footer>
                <p>� 2026 La Guarder�a de Salem</p>
            </footer>
        </div>
    );



}

export default Login;