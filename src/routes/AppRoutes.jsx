import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Materias from "../pages/Materias/Materias";
import Quiz from "../pages/Quiz/Quiz";
import Resultado from "../pages/Resultado/Resultado";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/aluno/materias" element={<Materias />} />
                <Route path="/aluno/quiz/:id" element={<Quiz />} />
                <Route path="aluno/resultado" element={<Resultado />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;