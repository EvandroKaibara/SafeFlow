import './Mudancas.css';

import { FaLongArrowAltRight } from "react-icons/fa";
import { Toaster, toast } from 'sonner'

const Mudanca = () => {
    return(
        <>
        <div className="container--mudanca">
            <div className="container--mudanca-titulo">
                <h2 className='h2--mudanca-titulo'>Mudanças climáticas</h2>
                <Toaster richColors/>
                <a className='link--mudanca' onClick={() => toast.warning('Função em desenvolvimento!')}>Ver todos<FaLongArrowAltRight size={20}/></a>
            </div>
            
            <div className="container--mudanca-items">
                <div className='container--mudanda-elemento'>
                    <img src="./img/ZonaNorte.png"/>
                    <h3 className='h3--mudanda'>Chuva forte na Zona Norte</h3>
                </div>
                <div className='container--mudanda-elemento'>
                    <img src="./img/Centro.png"/>
                    <h3 className='h3--mudanda'>Risco de alagamento no Centro</h3>
                </div>
                <div className='container--mudanda-elemento'>
                    <img src="./img/Temporal.png"/>
                    <h3 className='h3--mudanda'>Temporal na Zona Leste</h3>
                </div>
                <div className='container--mudanda-elemento'>
                    <img src="./img/OndaDeCalor.png"/>
                    <h3 className='h3--mudanda'>Onda de calor envolve São Paulo</h3>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Mudanca;