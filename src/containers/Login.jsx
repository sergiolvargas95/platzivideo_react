import React from 'react';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
    <div className="login">
        <section className="login__container">
        <h2>Inicia Sesión</h2>
        <form className="login__container--form">
            <input className="input" type="text" placeholder="Correo" />
            <input className="input" type="password" placeholder="Contraseña" />
            <button className="button">Iniciar Sesión</button>
            <div className="login__container--remember-me">
                <label>
                    <input type="checkbox" name="" id="cbox1" value="checkbox" /> Recuérdame
                </label>
                <a href="#">Olvidé mi Contraseña</a>
            </div>
        </form>
        <section className="login__container--social-media">
            <div><img src={googleIcon} alt="Google" /><a href="#">Inicia sesión con Google</a></div>
            <div><img src={twitterIcon} alt="Twitter" /><a href="#">Inicia sesión con Twitter</a></div>
        </section>
        <p className="login__container--register">¿No tienes ninguna cuenta? <a href="#">Regístrate</a></p>
    </section>
    </div>
);

export default Login;
