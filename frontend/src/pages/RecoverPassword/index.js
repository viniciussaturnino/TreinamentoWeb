import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function RecoverPasword(){
    return(
        <div class="form-structor">
            <div class="recover">
                <h1 class="form-title">Recuperar senha</h1>
                <div class="form-holder">
                    <form>
                        <input type="password" placeholder="Nova Senha" />
                        <input type="password" placeholder="Confirme a Senha" />
                    </form>
                </div>
                <button class="button">Atualizar senha</button>
            </div>
            <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#17333C" />
                Voltar
            </Link>
        </div>
    );
}