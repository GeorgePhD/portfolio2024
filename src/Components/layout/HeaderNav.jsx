import { NavLink } from 'react-router-dom';
import Logo from '../../../public/images/logo-removebg.png';
import '../../../src/App.css';
import DarkModeIcon from '../../../public/images/dark_mode_icon.png'
import { useState } from 'react';
const HeaderNav = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    const [language, setLanguage] = useState('English');
    const toggleLanguage = () => {
        setLanguage(language === 'Spanish' ? 'English' : 'Spanish');
    };

    return (/* &apos; */
        <header className='header'>
            <div className="logo"><span><img src={Logo} alt="" /></span>
            <h3 className='name'>Let&apos;sDevelopMe</h3>
            </div>
            <nav>
                <ul className='nav'>
                <div className="button__container">
                    <button className='menu__button' onClick={toggleLanguage}>{language}</button>
                    <img src={DarkModeIcon} alt="dark mode icon" className='dark__mode__icon' onClick={toggleTheme} />
                </div>
                    <li>
                    <NavLink to='./Home' className={({isActive}) => isActive ? 'active' : ''}>{language === 'Spanish' ? 'Home' : 'Inicio'}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio"className={({isActive}) => isActive ? 'active' : ''}>{language === 'Spanish' ? 'PORTFOLIO' : 'PORTAFOLIO'}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services" className={({isActive}) => isActive ? 'active' : ''}>{language === 'Spanish' ? 'SERVICES' : 'SERVICIOS'}</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/BLog" className={({isActive}) => isActive ? 'active' : ''}>Blog</NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/Contact" className={({isActive}) => isActive ? 'active' : ''}>{language === 'Spanish' ? 'CONTACT' : 'CONTACTO'}</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderNav