import './Footer.css';

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Footer = () =>{
    return(
        <>
        <div className="container--footer">
            <div className='container--footer-redes'>
                <span>Alerta certo. Ação rápida. Risco menor.</span>
                <div className="container--icones">
                    <FaFacebook color='white' size={20} className='icone'/>
                    <FaXTwitter color='white' size={20} className='icone'/>
                    <FaInstagram color='white' size={20} className='icone'/>
                </div>             
            </div>

            <div className='container--footer-sobre'>
                <h3 className="h3--footer">Sobre</h3>
                <span>Sobre nós</span>
                <span>Noticias</span>
                <span>Menu</span>
            </div>

            <div className='container--footer-campanhia'>
                <h3 className="h3--footer">Campanhia</h3>
                <span>Trabalhe conosco</span>
                <span>FAQ</span>
                <span>Blog</span>
            </div>

            <div className='container--footer-suporte'>
                <h3 className="h3--footer">Suporte</h3>
                <span>Conta</span>
                <span>Centro de Suporte</span>
                <span>Feedback</span>
                <span>Contato</span>
            </div>

            <div className='container--footer-newsletter'>
                <span>Se inscreva para receber nossas newsletters</span>
                <div className='container--newsletter'>
                    <input type="email" placeholder='Digite seu email' className='input--footer'/>
                    <button className='button--footer'><FaArrowRight /></button>
                </div>
            </div>
        </div>       
        </>
    );
}

export default Footer;