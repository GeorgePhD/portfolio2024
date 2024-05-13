import { NavLink } from 'react-router-dom';
import Logo from '../../../public/images/logo-removebg.png';
import '../../../src/App.css';
const HeaderNav = () => {
    return (
        <header className='header'>
            <div className="logo"><span><img src={Logo} alt="" /></span>
                <h3 className='name'>Let'sDevelopMe</h3>
            </div>
            <nav>
                <ul className='nav'>
                    <li>
                    <NavLink to='./Home' className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio"className={({isActive}) => isActive ? 'active' : ''}>Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Services" className={({isActive}) => isActive ? 'active' : ''}>Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/BLog" className={({isActive}) => isActive ? 'active' : ''}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderNav