import { NavLink } from 'react-router-dom';
import './style-min.css';
import logo from '../../assets/img/argentBankLogo.png';

function Navbar() {

    return (
        // Si l'utilisateur n'est pas connecté
        <nav className='main-nav'>
            <NavLink to='/' className='main-nav-logo'>
                <img
                    className='main-nav-logo-image'
                    src={logo}
                    alt='Argent Bank Logo'
                />
                <h1 className='sr-only'>Argent Bank</h1>
            </NavLink>
            <div className='nav-right'>
                <NavLink to='/signIn' className='main-nav-item' aria-label='Sign In'>
                    <i className='fa fa-user-circle'></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
