import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Recovery from './Pages/Recovery';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  exact element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Recovery" element={<Recovery/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;