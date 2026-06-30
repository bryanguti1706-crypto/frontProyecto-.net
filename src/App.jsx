import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Login";
import Admin from "./admin";
import User from "./user";
import Auth from "./autenticado";
import Register from "./Registro";

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Registro" element={<Register />} />
                <Route path="/user" element={<User />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/autenticado" element={<Auth />} />
            </Routes>
        </>
    );
}

export default App;