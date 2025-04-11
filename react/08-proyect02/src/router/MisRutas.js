import React from 'react'
import {Routes, Route, BrowserRouter, NavLink} from 'react-router-dom'
import Inicio from '../components/Inicio'
import Contacto from '../components/Contacto'
import Servicios from '../components/Servicios'
import Portafolio from '../components/Portafolio'
import Curriculum from '../components/Curriculum'
import HeaderNav from '../components/layout/HeaderNav'
import Footer from '../components/layout/Footer'

const MisRutas = () => {
    return (
        <BrowserRouter>
        {/*HEADER Y NAVEGACION*/}
        <HeaderNav/>
        {/*  CONTENIDO CENTRLA */}
            <Routes>
                <Route index element={<Inicio />} />
                <Route path='/inicio' element={<Inicio />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/servicios' element={<Servicios />} />
                <Route path='/portafolio' element={<Portafolio />} />
                <Route path='/curriculum' element={<Curriculum />} />
            </Routes>
            <hr/>
            {/* <h1>Footer</h1>footer */}
            <Footer/>
        </BrowserRouter>
    )
}
export default MisRutas
