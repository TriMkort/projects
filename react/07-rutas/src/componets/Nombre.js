import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Nombre = () => {
    // Valores por defecto en parametros opcionales
    // let {nombre="Maikol", apellido="Sabogal"} = useParams ();// Extrae los parametros de la URL
    
    const {nombre, apellido} = useParams ();// Extrae los parametros de la URL
    const navegar = useNavigate ();// Hook para navegar entre rutas
    
    const enviar = (e) => {
        e.preventDefault();
        let nombre = e.target.nombre.value;
        let apellido = e.target.apellido.value;
        const url = `/Nombre/${nombre}/${apellido}`;

        if (nombre.length <=0 && apellido.length <= 0){
            navegar("/Inicio")
        }else if (nombre === "contacto"){
            navegar("/Contacto")
        }
        else{
            navegar (url);
        }
        
    }

    // let nombre = params.nombre;

    return (
        <div>
            {!nombre && <h1> No hay nombres para mostrar </h1>}
            {nombre && <h1> Pagina de persona: {nombre} {apellido}</h1>}
            
            <p>Texto principal</p>

            <form onSubmit={enviar}>
                <input type="text" name="nombre"></input>
                <input type="text" name="apellido"></input>
                <input type="submit" name="enviar" value="Enviar"></input>
            </form>
        </div>
    )
}

export default Nombre
