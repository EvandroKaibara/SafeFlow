import './Login.css';

import { NavLink } from 'react-router-dom';

const Login = () => {
    return(
        <>
        <div className="container--banner-login">
            <form className='form--login'>
                <h1 className="h1--login">Faça seu login!</h1>
                <div className="container--input-login">
                    <label>Email</label>
                    <input type="email" className='input--login'/>
                </div>
                <div className="container--input-login">
                    <label>Senha</label>
                    <input type="password" class='input--login'/>
                </div>
                <div className="container--input-login">
                    <button class='button--login'><NavLink to="/">Entrar</NavLink></button>
                </div>

                <span className='span--login'>Não tem login? <NavLink to="/cadastro" className="link--login">Cadastre-se!</NavLink></span>
            </form>
        </div>
        </>
    );
}

export default Login;