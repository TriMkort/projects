import React, {useState} from 'react';

const MiPrimerEstado = () => {
    /*
  let nombre = "Maikol";

  const cambiarNombre = e => {
        nombres = "Stiven";
  }*/

  const [nombre, setnombre ] = useState("Maikol");
  
  const cambiarNombre = e => {
    setnombre('Stiven');}


  return (
    <div>
      <p>Mi primer estado</p>
      <strong>
        {nombre}
      </strong>
      &nbsp;
      <button onClick={cambiarNombre}>Cambiar</button>
    </div>
  )
}

export default MiPrimerEstado
