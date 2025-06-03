import './Banner.css'

import { TbWorld } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return(
        <>
        <div className="container--banner">
            <h1 className='h1--banner'>Soluções inteligentes para prevenção de desastres urbanos</h1>
            <NavLink to='/solucao' className='a--banner'><TbWorld size={30}/ >Veja nossa solução</NavLink>
        </div>
        </>
    );
}

export default Banner;