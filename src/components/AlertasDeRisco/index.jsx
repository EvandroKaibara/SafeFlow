import './AlertasDeRisco.css';

import { FaLongArrowAltRight } from "react-icons/fa";

const AlertasDeRisco = () => {
    return(
        <>
        <div className="container--alerta">
            <div className="container--alerta-titulo">
                <h2 className='h2--alerta'>Alertas e Riscos Atuais</h2>
                <a className='link--alerta'>Ver todos<FaLongArrowAltRight size={20}/></a>
            </div>
            
            <div className="container--alerta-items">
                <div className='container--alerta-elemento'>
                    <img src="./img/ZonaNorte.png"/>
                    <h3 className='h3--alerta'>Chuva forte na Zona Norte</h3>
                </div>
                <div className='container--alerta-elemento'>
                    <img src="./img/Centro.png"/>
                    <h3 className='h3--alerta'>Risco de alagamento no Centro</h3>
                </div>
                <div className='container--alerta-elemento'>
                    <img src="./img/Temporal.png"/>
                    <h3 className='h3--alerta'>Temporal na Zona Leste</h3>
                </div>
                <div className='container--alerta-elemento'>
                    <img src="./img/OndaDeCalor.png"/>
                    <h3 className='h3--alerta'>Onda de calor envolve São Paulo</h3>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default AlertasDeRisco;