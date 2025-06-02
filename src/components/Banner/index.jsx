import './Banner.css'

import { TbWorld } from "react-icons/tb";

const Banner = () => {
    return(
        <>
        <div className="container--banner">
            <h1 className='h1--banner'>Soluções inteligentes para prevenção de desastres urbanos</h1>
            <a className='a--banner' href='https://www.google.com/maps' target='_blank'><TbWorld size={30}/ >Acessar Mapa de Risco</a>
        </div>
        </>
    );
}

export default Banner;