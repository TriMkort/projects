import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from 'react-router-dom';

const Portafolio = () => {
  return (
    <div className="page">
      <h1 className='heading'>Portafolio</h1>
      {
        trabajos.map(trabajo => {
          return(
            <article key={trabajo.id}>
              <span>{trabajo.categoria}</span>
              <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
              <p>{trabajo.descripcion}</p>
            </article>
          );
          })
      }
    </div>
  )
}

export default Portafolio
