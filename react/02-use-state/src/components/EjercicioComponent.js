import React, {useState} from 'react'
import propTypes from 'prop-types'


const EjercicioComponent = ({year}) => {

    const [yearNow, setYearNow] = useState(year);
    
    const siguiente = () => {
        setYearNow(yearNow + 1);
    }
    
    const anterior = () => {
        setYearNow(yearNow - 1);
    }

    const cambiarYear = (e) => {
        let dato = parseInt(e.target.value);
        if(Number.isInteger(dato)){
            setYearNow(dato);
        }else{
            setYearNow(year);
        }

    }
    return (
        <div>
            <h2>Ejercicio Componente</h2>
            <p>
                Cambiar año: 
                    <input 
                        onChange={cambiarYear}
                        type='text' 
                        placeholder='Cambia el año'/> 
            </p>
                <strong className='label label-green'>{yearNow}</strong>
            <hr/>
            <p>
                <button onClick={anterior}>Anterior</button>
                &nbsp;
                <button onClick={siguiente}>Siguiente</button>
            </p>
        </div>
    )
}

EjercicioComponent.propTypes = {
    year: propTypes.number.isRequired
}

export default EjercicioComponent;
