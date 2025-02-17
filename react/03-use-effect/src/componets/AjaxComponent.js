import React, { useEffect, useState } from 'react'

const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([])

    //Generico / Basico


        /*const getUsuariosEstaticos = () => {
            setUsuarios([
                {
                    "id": 7,
                    "email": "michael.lawson@reqres.in",
                    "first_name": "Michael",
                    "last_name": "Lawson",
                        "avatar": "https://reqres.in/img/faces/7-image.jpg"
                },
                {
                    "id": 8,
                    "email": "lindsay.ferguson@reqres.in",
                    "first_name": "Lindsay",
                    "last_name": "Ferguson",
                    "avatar": "https://reqres.in/img/faces/8-image.jpg"
                },
                {
                    "id": 9,
                    "email": "tobias.funke@reqres.in",
                    "first_name": "Tobias",
                    "last_name": "Funke",
                    "avatar": "https://reqres.in/img/faces/9-image.jpg"
                },
            ])
        }
            */

        const getUsuarioAjaxPms =() => {
            fetch('https://reqres.in/api/users?page=2')
                .then(resp => resp.json())
                .then(resultado_final => {
                    setUsuarios(resultado_final.data);
                    console.log(usuarios);

                },
            error => {
                console.log (error);
            }
        )
        }
        
        useEffect(() => {
            //getUsuariosEstaticos();
            getUsuarioAjaxPms();
        },[])

    return (
        <div>
            <h2>Listado de usuario via Ajax</h2>
            <ol className='usaurios'>
                {
                    usuarios.map(usuario => {
                            console.log(usuarios);
                            return <li key= {usuario.id}>
                                            {usuario.first_name} {usuario.last_name}
                                        <br />
                                        <img src={usuario.avatar} alt={usuario.first_name} />
                                    </li>
                            })
                }

            </ol>
        </div>
    )
}

export default AjaxComponent;
