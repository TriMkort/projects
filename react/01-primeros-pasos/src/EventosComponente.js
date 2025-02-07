import React from 'react'

const EventosComponente = () => {
    const HasDadoClick = (e, nombre) => {
        alert('Has dado click' +nombre);}

      const DobleClick = (e, nombre) => {
        alert('Has dado click' +nombre);}
return (
    <div>
      <h1>Eventos Componente</h1>
      <button onClick ={ e => HasDadoClick (e, " Maikol")}>Click</button>
      <p>
        <button DobleClick ={ e => DobleClick (e, " Maikol")}>Doble Click</button>
      </p>
    </div>
  )
}

export default EventosComponente
