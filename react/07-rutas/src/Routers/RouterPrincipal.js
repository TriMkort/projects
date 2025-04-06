import React from 'react';
import { Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Inicio from '../componets/Inicio';
import Contacto from '../componets/Contacto';
import Articulo from '../componets/Articulo';
import Error from '../componets/Error';

const RouterPrincipal = () => {
    return (
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/inicio" element={<Inicio/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
                <Route path="/Articulo" element={<Articulo/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

export default RouterPrincipal
