import './Header.css';

const Header = () => {
    return (
        <>
        <div className='container--header'>
            <img src="./img/Logo.png" alt="Logo do SafeFlow" className='img--header'/>
            <nav className='nav--header'>
                <a className='link--header'>Abrigos</a>
                <a className='link--header'>Alertas</a>
                <a className='link--header'>Informações</a>
                <a className='link--header'>Sobre nós</a>
            </nav>
        </div>
        </>
    );
}

export default Header;