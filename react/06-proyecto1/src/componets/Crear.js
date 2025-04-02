import React, {useState} from 'react'

const Buscar = () => {
    const tituloComponete  = "Añadir pelicula";
    const [peliState, setPeliState] = useState({
        titulo: '', 
        descripcion: ''
    });

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        //conseguir datos del formulario

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear pelicula
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion,
        };

        setPeliState(peli);

    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponete}</h3>

            <strong>
            {(titulo && descripcion) && "Has creado la pelicula:" + titulo}
            </strong>
            <form onSubmit={conseguirDatosForm}>
                <input type="text" 
                        id="titulo"
                        name="titulo" 
                        placeholder="Titulo" />

                <textarea   id="descripcion"
                            name="descripcion" 
                            placeholder="Descripción">
                </textarea>

                <input type="submit" 
                        id="save" 
                        value="Guardar"/>
            </form>

        </div>
    )
}

export default Buscar