import './Header.css';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div className='container--header'>
            <NavLink to="/"><img src="./img/Logo.png" alt="Logo do SafeFlow" className='img--header'/></NavLink>
            <nav className='nav--header'>
                <NavLink to="/login" className='link--header'>Login</NavLink>
            </nav>
        </div>
        </>
    );
}

export default Header;