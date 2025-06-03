import './SobreNos.css';

import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SobreNos = () => {
    return(
        <>
        <div className="container--sobre">
            <div className="container--sobre-texto">
                <h2 className='h2--sobre'>Sobre Nós</h2>
                <p className='p--sobre'>Somos uma empresa dedicada a preparar e proteger pessoas diante de desastres naturais. Oferecemos informação clara, alertas e dicas práticas para que você esteja sempre pronto para agir com segurança. Nossa missão é transformar conhecimento em prevenção — porque com preparo, todo desastre pode ser enfrentado com mais confiança.</p>
                <a className='link--sobre'><NavLink to="/sobre">Leia mais<FaLongArrowAltRight size={20}/></NavLink></a>
            </div>
            <div className="container--sobre-imagem">
                <img src="./img/Sobre.png" className='img--sobre'/>
            </div>
        </div>
        </>
    );
}

export default SobreNos;