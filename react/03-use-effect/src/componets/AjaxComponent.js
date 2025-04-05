import React, { useEffect, useState } from 'react'

const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([])
    const [cargando, setCargando] = useState(true)
    const [errores, setErrores] = useState("")

    //Generico / Basico


        const getUsuariosEstaticos = () => {
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

        const getUsuarioAjaxWait = () => {
            setTimeout (async() => {
                try { const peticion = await fetch('https://reqres.in/api/users?page=2');
                    const {data} = await peticion.json();
        
                    setUsuarios(data);
                    setCargando(false);
                } catch (error) {
                    console.log(error);
                    setErrores (error.message)
                }
            }, 2000);

        }
        
        useEffect(() => {
            //getUsuariosEstaticos();
            //getUsuarioAjaxPms();
            getUsuarioAjaxWait();
        },[])

        if(errores !== ""){
            //cuando pasa algun error
            return (<div className='errores'>
                {errores}
            </div>
            )
        }
        else if (cargando === true){
            //cuando esta cargando
            return(
                <div className='cargando'>
                    <h2>Cargando...</h2>
                </div>
        );
        }else if (cargando === false && errores === ""){
            //cuando todo va bien
            return (
                <div>
                    <h2>Listado de usuario via Ajax</h2>
                        <ol className='usaurios'>
                            {
                                usuarios.map(usuario => {
                                    console.log(usuarios);
                                    return <li key= {usuario.id}>
                                                    {usuario.first_name} 
                                                    {usuario.last_name}
                                                <br />
                                                <img src={usuario.avatar} alt={usuario.first_name} />
                                            </li>
                                    })
                            }
                        </ol>
                </div>
            )
        }

    }

export default AjaxComponent;
