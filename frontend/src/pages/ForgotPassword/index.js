import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import './styles.css';

export default function ForgotPasword(){
    return (
        <div className="forgot-container">
            <div className="content">
                <section>
                    <img src={logo} alt="FGAirlines" />

                    <h1>Esqueceu sua senha?</h1>
                    <p>Preencha com o seu email para receber um link para atualizar sua senha</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#17333C" />
                        Voltar
                    </Link>
                </section>

                <form>
                    <input type="email" placeholder="E-mail"/>
                    <button type="submit">Enviar email</button>
                </form>
            </div>
        </div>
    );
}