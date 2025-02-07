import React from 'react'

const EventosComponente = () => {
    const HasDadoClick = (e, nombre) => {
        alert('Has dado click' +nombre);}

      function HasDadoDobleClick (e){
        alert('Has dado doble click!!');
      }

return (
    <div>
      <h1>Eventos Componente</h1>
      <p>
      <button onClick ={ e => HasDadoClick (e, " Maikol")}>Click</button>
      </p>
      <p>
        <button onDoubleClick ={HasDadoDobleClick}>Dame Doble Click</button>
      </p>
    </div>
  )
}

export default EventosComponente
