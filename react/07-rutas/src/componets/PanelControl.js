import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const PanelControl = () => {
    return (
        <div>
                <h1>PANEL DE CONTROL </h1>
                <p>Elige una de estas opciones</p>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/panel/inicio">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/panel/Crear">Crear Articulo</NavLink>
                        </li>
                        <li>
                            <NavLink to="/panel/Gestion">Gestion de usuarios </NavLink>
                        </li>
                        <li>
                            <NavLink to="/panel/Acerca">Acerca de</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    {/*Aqui quiero cargar los componentes de las subrutas */}
                    <Outlet/>
                </div>
        </div>
    )
}

export default PanelControl
