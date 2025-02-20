import React from 'react'

const FormularioComponent = () => {
    return (
        <div>
        <h1>Fomularios React</h1>
        
        <form>
                <input type='Nombre' placeholder='Nombre'/>
                <input type='Apellido' placeholder='Apellido'/>
                <select>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
                <textarea placeholder='Biografia'></textarea>
                <input type='submit' value="Enviar"></input>
            </form>
        </div>
    )
}

export default FormularioComponent
