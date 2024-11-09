import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo } from '../../reduxStore/userSlice';
import { useEffect } from "react";

function Navbar() {
    const dispatch = useDispatch();

    // Récupérer le token et les données utilisateur dans le state global
    const { data: token } = useSelector((state) => state.user);

    useEffect(() => {
        // Récupérer les informations utilisateur après la connexion
        if (token) {
            dispatch(fetchUserInfo());
        }
    }, [dispatch, token]); // Dépendance sur le token pour s'assurer qu'on fetch après connexion

    return (
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
                <NavLink to="/signIn" className="main-nav-item" aria-label="Sign In">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
