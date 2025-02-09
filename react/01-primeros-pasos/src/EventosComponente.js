import React from 'react'

const EventosComponente = () => {
    const HasDadoClick = (e, nombre) => {
        alert('Has dado click' +nombre);}

      function HasDadoDobleClick (e){
        alert('Has dado doble click!!');
      }

      const hasentrado = (e, accion) => {console.log('Has' + accion + ' a la caja!!');}
      const hassalido = (e, accion) => {console.log('Has' + accion + ' de la caja!!');}

      const estasdentro = e => {console.log("estas dentro del input mete tu nombre")};
      const estasfuera = e => {console.log("Estas fuera del input Chao")};
return (
    <div>
      <h1>Eventos Componente</h1>
      <p>
      <button onClick ={ e => HasDadoClick (e, " Maikol")}>Click</button>
      </p>
      <p>
        <button onDoubleClick ={HasDadoDobleClick}>Dame Doble Click</button>
      </p>
      <div id='caja' 
          onMouseEnter={e => hasentrado (e, ' entrado')}
          onMouseLeave={e => hassalido (e, ' salido')}>
              Estas en la caja
      </div>
      
      <p>
        <input type='text' 
                onFocus={estasdentro} 
                onBlur={estasfuera}
                placeholder='Introduce tu nombre'/>
      </p>
    </div>

  )
}

export default EventosComponente
