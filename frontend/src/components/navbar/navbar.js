import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/argentBankLogo.png";


function Navbar() {
    return (
        <>
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to="/signIn" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
                <NavLink to="/signUp" className="main-nav-item">
                    Sign Up
                </NavLink>
            </div>
        </>
    )

}

export default Navbar;