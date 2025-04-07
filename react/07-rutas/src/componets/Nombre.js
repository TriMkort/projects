import React from 'react'
import { useParams } from 'react-router-dom'

const Nombre = () => {
    const {nombre, apellido} = useParams ();// Extrae los parametros de la URL

    return (
        <div>
            <h1>Pagina de persona: {nombre} {apellido}</h1>
            <p>Texto principal</p>
        </div>
    )
}

export default Nombre
