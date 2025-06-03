import './InformacoesUteis.css';

import { FaLongArrowAltRight } from "react-icons/fa";
import { Toaster, toast } from 'sonner'

const InformacoesUteis = () => {
    return(
        <>
        <div className="container--informacoes">
            <div className="container--informacoes-titulo">
                <h2 className='h2--informacoes'>Informações Úteis em Caso de Emergência</h2>
                <Toaster richColors/>
                <a className='link--informacoes' onClick={() => toast.warning('Função em desenvolvimento!')}>Ver todos<FaLongArrowAltRight size={20}/></a>
            </div>
            
            <div className="container--informacao-items">
                <div className='container--informacao-item'>
                    <div className="container--informacao-item-imagem">
                        <img src="./img/Rua.png" className='img--informacao' />
                    </div>
                    
                    <div className="container--informacao-item-descricao">
                        <h3 className="h3--informacao">Evite essas ruas durante alagamentos</h3>
                        <p className="p--informacao">Evite essas ruas em dias de alagamento para garantir sua segurança e evitar transtornos no trânsito.</p>
                    </div>
                </div>

                <div className='container--informacao-item'>
                    <div className="container--informacao-item-imagem">
                        <img src="./img/Rotas.png" className='img--informacao' />
                    </div>
                    
                    <div className="container--informacao-item-descricao">
                        <h3 className="h3--informacao">Rotas alternativas durante algamentos</h3>
                        <p className="p--informacao">Confira rotas alternativas seguras para fugir dos trechos alagados e chegar ao destino com mais tranquilidade.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default InformacoesUteis;