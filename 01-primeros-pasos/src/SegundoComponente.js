import React from 'react'

const SegundoComponente = () => {


    
    const libros = ["Padre rico", "Mente Estoica", "Poder Subconciente"];
    // const libros = []


    return (
        <div className='SegundoComoponente'>
            <h1>Listado de libros</h1>
            {libros.length >= 1 ? (
                <ul>
                    {
                        libros.map((libro, indice) =>{
                            return <li key={indice}>{libro}</li>
                        })
                    }
                </ul>)
                : (<p>No hay libros</p>)
            }       
        </div>
    )
    }

export default SegundoComponente
