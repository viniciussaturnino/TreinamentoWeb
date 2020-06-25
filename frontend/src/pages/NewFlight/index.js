import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logo from '../../assets/logo.svg'

export default function NewFlight() {
    const [destiny, setDestiny] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [value, setValue] = useState('');

    const airlineId = localStorage.getItem('airlineId');

    const history = useHistory();

    async function handleNewFlight(e){
        e.preventDefault();

        const data = {
            destiny,
            date,
            hour,
            value,
        }

        try {
            await api.post('flights', data, {
                headers: {
                    Authorization: airlineId,
                }
            })
            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar voo, tente novamente');
        }
    }

    return (
        <div className="new-flight-container">
            <div className="content">
                <section>
                    <img src={logo} alt="FGAirlines" />

                    <h1>Cadastrar novo voo</h1>
                    <p>Cadastre um novo voo e coloque-o para venda agora mesmo!</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#17333C" />
                        Voltar
                    </Link>
                </section>

                <form onSubmit={handleNewFlight}>
                    <input placeholder="Destino" value={destiny} onChange={e => setDestiny(e.target.value)} />
                    <div className="form-group">
                        <input placeholder="Data" value={date} onChange={e => setDate(e.target.value)} />
                        <input placeholder="Hora" value={hour} onChange={e => setHour(e.target.value)} />
                    </div>
                    <input placeholder="Valor (em reais)" value={value} onChange={e => setValue(e.target.value)} />
                    <button className="button" type="submit">Cadastrar</button>                        
                </form>
            </div>
        </div>
    );
}