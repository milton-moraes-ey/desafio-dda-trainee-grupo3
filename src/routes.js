import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Recovery from './Pages/Recovery';
import MeusHerois from './Pages/MeusHerois';
import PerfilHeroi from './Pages/PerfilHeroi';
import CadastroHeroi from "./Pages/CadastroHeroi";
import PaginaInicial from "./Pages/PaginaInicial";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  exact element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/CadastroHeroi" element={<CadastroHeroi/>}/>
                <Route path="/Recovery" element={<Recovery/>}/>
                <Route path="/MeusHerois" element={<MeusHerois/>}/>
                <Route path="/PerfilHeroi" element={<PerfilHeroi/>}/>
                <Route path="/PaginaInicial" element={<PaginaInicial/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;