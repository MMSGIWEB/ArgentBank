import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/userLogo.png";


function UserNav({ userName }) {
    return (
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
                    {userName}
                </div>
                {/* chemin vers profile avant édition? */}
                <NavLink to="/user" className="main-nav-item">
                    <i className="fa-regular fa-user"></i>
                </NavLink>
                <button to="/user/edit" className="main-nav-item">
                    <i className="fa-solid fa-gear"></i>
                </button>
                <NavLink to="/">
                    <i className="fa-solid fa-power-off"></i>
                </NavLink>
            </div>
        </nav>
    )

}

export default UserNav;