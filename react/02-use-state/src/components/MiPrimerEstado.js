import React, {useState} from 'react';

const MiPrimerEstado = () => {
    /*
  let nombre = "Maikol";

  const cambiarNombre = e => {
        nombres = "Stiven";
  }*/

  const [nombre, setnombre ] = useState("Maikol");
  
  const cambiarNombre = (e, nombreFijo) => {
    setnombre(nombreFijo);}


  return (
    <div>
      <p>Mi primer estado</p>
      <strong className='label'>
        {nombre}
      </strong>
      &nbsp;
      <button onClick={e => cambiarNombre(e, "Stiven")}>Cambiar a Stiven</button>
      &nbsp;
      <input type='text' onKeyUp={e => cambiarNombre (e, e.target.value)} placeholder="Escribe aquí"></input>
    </div>
  )
}

export default MiPrimerEstado
