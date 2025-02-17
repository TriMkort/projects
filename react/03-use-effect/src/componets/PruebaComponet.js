import React, {useEffect, useState}from 'react'
import AvisoComponent from './AvisoComponent';

const PurebaComponet = () => {

  const [nombre, setNombre] = useState('Wolf Scott');
  const [fecha, setFecha] = useState("01-01-2021");
  const [contador, setContador] = useState(0);

  const modnombre = (e) => {
    setNombre(e.target.value);
  }


  const cambiarFecha = () => {
    setFecha(new Date().toLocaleString());
  }



  //Si no se le asigna nada en el segundo parametro [] se deja vacio, solo se ejecuta una vez
useEffect(() => {
    console.log("Has cargado el componente pruebas Componet ");
  }, [])


useEffect(() => {
    setContador(contador + 1);
    console.log("Has modificado la salida de nombre: "+contador);
  }, [fecha, nombre]);

  return (
    <div>
      <h2>El efecto hook Use Effect</h2>


      <strong className={contador >= 10 ? 'label label-green': 'label'}>{nombre}</strong>
      <strong className={contador >= 10 ? 'label label-green': 'label'}>{fecha}</strong>

      <p>
        <input  type="text" 
                onChange={modnombre} 
                placeholder='Cambia Nombre' 
        />
        <button onClick={cambiarFecha}> Cambiar fecha</button>
      </p>

      {nombre == "MAIKOL" && <AvisoComponent/>}

    </div>
  )
}

export default PurebaComponet
