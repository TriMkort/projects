import React, {useEffect, useState}from 'react'

const PurebaComponet = () => {

  const [nombre, setNombre] = useState('Wolf Scott');

  const modnombre = (e) => {
    setNombre(e.target.value);

  }

  const [fecha, setFecha] = useState("01-01-2021");

  const cambiarFecha = () => {
    setFecha(new Date().toLocaleString());
  }

  //Si no se le asigna nada en el segundo parametro [] se deja vacio, solo se ejecuta una vez
useEffect(() => {
    console.log("Has cargado el componente pruebas Componet ");
  }, [])


useEffect(() => {
    console.log("Has modificado el nombre");
  }, [nombre])

  return (
    <div>
      <h2>El efecto hook Use Effect</h2>


      <strong className='label'>{nombre}</strong>
      <p>{fecha}</p>

      <p>
        <input  type="text" 
                onChange={modnombre} 
                placeholder='Cambia Nombre' 
        />
        <button onClick={cambiarFecha}> Cambiar fecha</button>
      </p>

    </div>
  )
}

export default PurebaComponet
