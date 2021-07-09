import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <div className="main_container">
        <p className="error">404</p>
        <p className="error_message">Página no encontrada :'(</p>
        <div>
            <button className="button-back">Volver al inicio</button>
        </div>
    </div>
);

export default NotFound;
