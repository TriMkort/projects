import React, { useState } from 'react'

const FormularioComponent = () => {

    const [usuario, setusuario] = useState({});

    const conseguirDatosFormulario = e =>{
        e.preventDefault();
        
        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genereo: datos.genero.value,
            bio: datos.bio.value
        };
        console.log(usuario);
            
        }
    
    return (
        <div>
        <h1>Fomularios React</h1>

        {usuario.bio.length >= 1 &&(
            <div className='info_usuario label label-gray'>
                {usuario.nombre} {usuario.apellido} es un {usuario.genereo} y su Biografia es esta: <p>{usuario.bio}</p> 
            </div>
        )}
    
        <form on onSubmit={conseguirDatosFormulario}>
                <input type="text" 
                    placeholder='Nombre'
                    name='nombre'
                />
                <input  type="text" 
                    placeholder='Apellido'
                    name='apellido'
                />
                <select name='genero'>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea placeholder='Biografia' name='bio'></textarea>
                <input type='submit' value="Enviar"></input>
            </form>
        </div>
    )
}

export default FormularioComponent
