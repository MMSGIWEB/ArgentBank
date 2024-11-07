import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector, useStore } from 'react-redux';
import { logout } from '../../reduxStore/userSlice';

function Navbar() {
    const store = useStore()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data, token } = useSelector((state) => state.user);

    const handleLogout = () => {
        dispatch(logout());  // Déconnexion via Redux
        navigate("/");       // Redirection vers la page d'accueil
    };

    return (
        <>
            {token ? (
                // Si l'utilisateur est connecté
                <nav className="main-nav user-main-nav">
                    <div className="main-nav-logo user-logo">
                        <img
                            className="main-nav-logo-image"
                            src={logo}
                            alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </div>
                    <div className="user-nav">
                        <div className="user-name">
                            {/* Affichage du nom de l'utilisateur */}
                            {data?.username}
                        </div>
                        <NavLink to="/user" className="main-nav-item">
                            <i className="fa-regular fa-user"></i>
                        </NavLink>
                        <button className="main-nav-item">
                            <i className="fa-solid fa-gear"></i>
                        </button>
                        <button className="main-nav-item" onClick={handleLogout}>
                            <i className="fa-solid fa-power-off"></i>
                        </button>
                    </div>
                </nav>
            ) : (
                // Si l'utilisateur n'est pas connecté
                <nav className="main-nav">
                    <NavLink to="/" className="main-nav-logo">
                        <img
                            className="main-nav-logo-image"
                            src={logo}
                            alt="Argent Bank Logo"
                        />
                        <h1 className="sr-only">Argent Bank</h1>
                    </NavLink>
                    <div className="nav-right">
                        <NavLink to="/signIn" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                        <NavLink to="/signUp" className="main-nav-item">
                            <i className="fa fa-user-plus"></i>
                            Sign Up
                        </NavLink>
                    </div>
                </nav>
            )}
        </>
    );
}

export default Navbar;
