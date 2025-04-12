import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate} from "react-router-dom";
import Inicio from '../componets/Inicio';
import Contacto from '../componets/Contacto';
import Articulo from '../componets/Articulo';
import Error from '../componets/Error';
import Nombre from '../componets/Nombre';
import PanelControl from '../componets/PanelControl';
import InicioPanel from '../componets/panel/InicioPanel';
import Crear from '../componets/panel/Crear';
import Acerca from '../componets/panel/Acerca';
import Gestion from '../componets/panel/Gestion';


const RouterPrincipal = () => {
    return (
        <>
        <BrowserRouter>

        <h1>Cabecera</h1>
        <hr/>
        
        <h2>Menu de navegacion</h2>
        <hr/>
        <nav>  
            <ul>
                <li>
                    <NavLink 
                        to="/Inicio"
                        className={({isActive}) => isActive ? "activado" : ""}>
                        Inicio 
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink 
                        to="/Contacto"
                        className={({isActive}) => isActive ? "activado" : ""}>
                        Contacto 
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink 
                        to="/Articulo"
                        className={({isActive}) => isActive ? "activado" : ""}>
                        Articulo 
                    </NavLink>
                </li>
            </ul>
            <ul>    
                <li>
                    <NavLink 
                        to="/panel"
                        className={({isActive}) => isActive ? "activado" : ""}>
                        Panel Control 
                    </NavLink>
                </li>
            </ul>

        </nav>
        <section className='Rutas'>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/Inicio" element={<Inicio/>}/>
                <Route path="/Contacto" element={<Contacto/>}/>
                <Route path="/Articulo" element={<Articulo/>}/>
                <Route path="/Nombre/:nombre/:apellido" element={<Nombre/>}/>
                <Route path="/Nombre/:nombre/" element={<Nombre/>}/>
                <Route path="/Nombre/" element={<Nombre/>}/>
                <Route path="/Redirigir" element={<Navigate to="/Nombre/Maikol/Sabogal"/>}/>

                <Route path="/panel/*" element={<PanelControl />}>
                        <Route index element={<InicioPanel />} />
                        <Route path="Inicio" element={<InicioPanel />} />
                        <Route path="Crear" element={<Crear />} /> 
                        <Route path="Gestion" element={<Gestion />} />
                        <Route path="Acerca" element={<Acerca />} />
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </section>
        <hr/>
        <footer>
            <h3>Pie de pagina</h3>
        </footer>
        </BrowserRouter>
        </>
    )
}

export default RouterPrincipal
