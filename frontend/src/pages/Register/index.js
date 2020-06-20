import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/big-logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="FGAirlines" />

                    <h1>Cadastro</h1>
                    <p>Cadastre sua linha aérea e começe a ajudar pessoas a encontrarem suas promoções agora mesmo!</p>

                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#17333C" />
                        Não tem cadastro? Registre-se
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da linha aérea" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Cidade" />
                    <div className="form-group">
                        <input placeholder="UF" style={{ width: 80 }} />
                        <button className="button" type="submit">Cadastrar</button>
                    </div>
                    
                        
                </form>
            </div>
        </div>
    );
}