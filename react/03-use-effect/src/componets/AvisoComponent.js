import React, { useEffect } from 'react'

const AvisoComponent = () => {

    useEffect(() => {
        //Avizar que el componente se ha montado
        alert("El componente 'AvisoComponent' se ha cargado")

        //Avisar que el componente se ha desmontado
        return () => {
            alert("El componente 'AvisoComponent.js' se ha desmontado")
        }

    }, [])
return (
<div>
    <hr/>
    <h3>Bien hecho Maiik lo estas logrando</h3>
    <button onClick={ () => {
            alert("Bienvenido")
        }}>Mostrar Alerta
    </button>
</div>
)
}

export default AvisoComponent
