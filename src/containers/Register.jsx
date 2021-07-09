import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
    <div className="register">
        <section className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button-register">Registrarme</button>
            </form>
            <div className="register__signin">
                <Link to="/login">Iniciar sesión</Link>
            </div>
            </section>
    </div>
);

export default Register;