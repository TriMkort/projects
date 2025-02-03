import React from 'react';
import PropTypes from 'prop-types';

const TercerComponente = ({ nombre, apellido, ficha }) => {
    return (
        <div className='Tercer-Componente'>
            <h1>Tercer Componente</h1>
            <h2>Comunicación entre componentes</h2>
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{ficha.estado}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.alergias}</li>
                <li>{ficha.altura}</li>
            </ul>
        </div>
    );
};

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.shape({
        altura: PropTypes.string,
        grupo: PropTypes.string,
        alergias: PropTypes.string,
        estado: PropTypes.string
    }).isRequired
};

TercerComponente.defaultProps = {
    nombre: "Alberto",
    apellido: "Garzon"
};

export default TercerComponente;
