import React, { useEffect, useState } from 'react'

const Listado = () => {

    const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        console.log("Componente del listado cargado");
        conseguirPeliculas();

    },[]);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        setListadoState(peliculas);
    }
    
    return (
        <div className='content'>
            <>
                {listadoState != null ? 
                        listadoState.map (peli => {
                        return (
                            <article className="peli-item" key={peli.id}>
                                <h3 className="title">{peli.titulo}</h3>
                                <p className="description">{peli.descripcion}</p>
                                <button className="edit">Editar</button>
                                <button className="delete">Borrar</button>
                            </article>
                        );
                    })
                    :<h2>No hay peliculas para mostrar</h2>
                } 
            </>
        </div>
    )
}

export default Listado
