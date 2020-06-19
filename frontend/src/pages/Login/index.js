import React from 'react';
import { FiUserPlus } from 'react-icons/fi';
import './styles.css';

import logo from '../../assets/logo.svg';
import plane from '../../assets/big-plane.svg'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <img src={logo} alt="FGAirlines" />
                
                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID" />
                    <button type="submit">Entrar</button>

                    <a href="/register">
                        <FiUserPlus size={16} color="#17333C" />
                        Não tem cadastro? Registre-se
                    </a>
                </form>
            </section>

            <img src={plane} alt="Airplane" />
        </div>
    );
}