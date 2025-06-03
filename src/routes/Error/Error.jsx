import './Error.css';

import { NavLink } from 'react-router-dom';

const Error = () =>{
    return(
        <>
        <div className="container--erro">
            <div className="container--erro-titulo">
                <h1 className='h1--erro'>ERRO 404: NOT FOUND</h1>
                <p className='p--erro'>Página não encontrada...</p>
            </div>            
            <NavLink to="/" className={'link--erro'}>Voltar a Home!</NavLink>
        </div>        
        </>
    );
}

export default Error;