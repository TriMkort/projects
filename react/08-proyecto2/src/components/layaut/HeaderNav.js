import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNav = () => {
    return (
        <header>
            <div className='Logo'>
                <span>V</span>
                <h3>Maikol Stiven</h3>
            </div>
                <h1>Maikol Stiven</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">Contacto</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum">Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio">Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">Servicios</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav
