function App() {
  return (
    <div classNameName="layaut">
            {/*Cabecera*/}
            <header className="header">
                <div className="logo">
                    <div className="play"></div>
                </div>
                <h1>Mis-Pelis</h1>
            </header>
            {/*Barra de navegacion*/}
            <nav className="nav">
                <ul>
                    <li> <a href="/#">Incio</a></li>
                    <li> <a href="/#">Peliculas</a></li>
                    <li> <a href="/#">Blog</a></li>
                    <li> <a href="/#">Contacto</a></li>
                </ul>
            </nav>
            {/*Contenido principal*/}
            <section className="content">
            {/*Aqui iran las peliculas*/}
                <article className="peli-item">
                    <h3 className="title">Desarrollo Web</h3>
                    <p className="Descripción">Descripción</p>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>
                <article className="peli-item">
                    <h3 className="title">Desarrollo Web</h3>
                    <p className="Descripción">Descripción</p>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>
                <article className="peli-item">
                    <h3 className="title">Desarrollo Web</h3>
                    <p className="Descripción">Descripción</p>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>
                <article className="peli-item">
                    <h3 className="title">Desarrollo Web</h3>
                    <p className="Descripción">Descripción</p>
                    <button className="edit">Editar</button>
                    <button className="delete">Borrar</button>
                </article>
            </section>
            {/*Barra lateral*/}
            <aside className="lateral">
                <div className="search">
                    <h3 className="title"> Buscador</h3>
                    <form>
                        <input type="text"/>
                        <button>Buscar</button>
                    </form>
                </div>
                <div className="add">
                    <h3 className="title">Añadir pelicula</h3>
                    <form>
                        <input type="text" placeholder="Titulo"/>
                        <textarea placeholder="Descripción"></textarea>
                        <input type="submit" value="Guardar"></input>
                    </form>
                </div>    
            </aside>
            {/*Pie de pagina*/}
            <footer className="footer">
                &copy; Máster en JavaScript ES12 y TypeSript <a href="#">victorrobles.es </a>
            </footer>
        </div>
      );
  }

export default App;
