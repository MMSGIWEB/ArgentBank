import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/argentBankLogo.png";


function UserNav({ userName }) {
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
            <div className="user-nav">
                <NavLink to="/user/edit" className="user-name">
                    userName
                    {/* {userName} */}
                </NavLink>
                <NavLink to="/signIn" className="main-nav-item">
                    <i className="fa-regular fa-user"></i>
                </NavLink>
                <NavLink to="/signUp" className="main-nav-item">
                    <i className="fa-solid fa-gear"></i>
                </NavLink>
                <NavLink to="/">
                    <i className="fa-solid fa-power-off"></i>
                </NavLink>
            </div>
        </>
    )

}

export default UserNav;