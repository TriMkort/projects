import React from 'react'

const Buscar = () => {
    return (
        <div className="search">
            <h3 className="title">Buscar</h3>
            <form>
                <input type="text" id="search_field" />
                <button id="search">Buscar</button>
            </form>
        </div>
    )
}

export default Buscar
