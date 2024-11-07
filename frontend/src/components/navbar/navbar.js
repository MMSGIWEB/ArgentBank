//NAVBAR

import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";
import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reduxStore/userSlice'

function Navbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { data, token } = useSelector((state) => state.user)
    const handleLlogout = () => {
        dispatch(logout())
        navigate("/")
    }

    return (
        <>
            {!token ? (
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
                        <div className="main-nav-item">
                            Sign Up
                        </div>
                    </div>
                </nav>
            ) : (
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
                            {/* données username */}
                            {data?.username}
                        </div>
                        {/* chemin vers profile avant édition? */}
                        <NavLink to="/user" className="main-nav-item">
                            <i className="fa-regular fa-user"></i>
                        </NavLink>
                        <button className="main-nav-item">
                            <i className="fa-solid fa-gear"></i>
                        </button>
                        <button type="submit" >
                            <i className="fa-solid fa-power-off" onClick={handleLlogout}></i>
                        </button>
                    </div>
                </nav>
            )}
        </>
    )
}

export default Navbar;