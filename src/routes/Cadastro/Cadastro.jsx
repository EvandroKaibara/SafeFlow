import './Cadastro.css';

import { NavLink } from 'react-router-dom';

const Cadastro = () => {
    return(
        <>
        <div className="container--banner-cadastro">
            <form className='form--cadastro'>
                <h1 className="h1--cadastro">Faça seu cadastro!</h1>
                <div className="container--input-cadastro">
                    <label>Nome</label>
                    <input type="text" className='input--cadastro'/>
                </div>
                <div className="container--input-cadastro">
                    <label>Email</label>
                    <input type="email" className='input--cadastro'/>
                </div>
                <div className="container--input-cadastro">
                    <label>Senha</label>
                    <input type="password" class='input--cadastro'/>
                </div>
                <div className="container--input-cadastro">
                    <button class='button--cadastro'><NavLink to="/login">Cadastrar</NavLink></button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Cadastro;