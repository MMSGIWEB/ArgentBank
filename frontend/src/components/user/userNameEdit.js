import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css';
import logo from "../../assets/img/argentBankLogo.png";
import { fetchUserInfo, logout, modify } from "../../reduxStore/userSlice";
import { useNavigate, NavLink } from "react-router-dom";

function UsernameEditForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Accéder aux données de l’utilisateur dans le state global
    const { data: user, token, isLoading } = useSelector((state) => state.user);
    const firstname = user?.firstName || '';
    const lastname = user?.lastName || '';
    const currentUsername = user?.userName || ''; // Par défaut, chaîne vide si userName est undefined

    useEffect(() => {
        if (token) {
            dispatch(fetchUserInfo());
        }
    }, [dispatch, token]);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    // État local pour l'édition
    const [toEdit, setEdit] = useState(false);
    const [username, setUsername] = useState(currentUsername); // Init avec `currentUsername`

    useEffect(() => {
        // Mettre à jour le champ d’édition si `currentUsername` change
        setUsername(currentUsername);
    }, [currentUsername]);

    const openAndCloseEdit = () => {
        setEdit(!toEdit);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleFormReset = () => {
        setUsername(currentUsername); // Restaurer la valeur actuelle
        openAndCloseEdit();
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Username avant modification :", username);  // Log avant envoi
        dispatch(modify({ userName: username }))
            .unwrap()
            .then(() => {
                console.log('Username updated successfully');
                console.log('New username:', username);
                dispatch(fetchUserInfo()); // Rafraîchir les informations après modification
                openAndCloseEdit();
            })
            .catch((error) => {
                console.error('Error updating username:', error.message);
            });
    };

    return (
        <>
            <nav className="main-nav user-main-nav">
                <div className="main-nav-logo user-logo">
                    <NavLink to="/">
                        <img
                            className="main-nav-logo-image"
                            src={logo}
                            alt="Argent Bank Logo"
                        />
                    </NavLink>
                    <h1 className="sr-only">Argent Bank</h1>
                </div>
                <div className="user-nav">
                    <div className="user-name">
                        {isLoading ? 'Loading...' : user.userName} {/* Affiche user.userName */}
                    </div>
                    <NavLink to="/user" className="main-nav-item" aria-label="User Profile">
                        <i className="fa-regular fa-user"></i>
                    </NavLink>
                    <button className="main-nav-item" aria-label="Settings">
                        <i className="fa-solid fa-gear"></i>
                    </button>
                    <button className="main-nav-item" onClick={handleLogout} aria-label="Logout">
                        <i className="fa-solid fa-power-off"></i>
                    </button>
                </div>
            </nav>
            {!toEdit ? (
                <div className="header">
                    <h1 className="welcome">Welcome back<br />{firstname} {lastname}!</h1>
                    <button className="edit-button" onClick={openAndCloseEdit}>Edit Name</button>
                </div>
            ) : (
                <div className="edit-username">
                    <h2>Edit user info</h2>
                    <form className="edit-username-form" onSubmit={handleFormSubmit}>
                        <fieldset className="form">
                            <div>
                                <label htmlFor="username">User name</label>
                                <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
                            </div>
                            <div>
                                <label htmlFor="firstname">First name</label>
                                <input type="text" id="firstname" name="firstname" value={firstname} readOnly />
                            </div>
                            <div>
                                <label htmlFor="lastname">Last name</label>
                                <input type="text" id="lastname" name="lastname" value={lastname} readOnly />
                            </div>
                        </fieldset>
                        <fieldset className="btns">
                            <button type="submit" id="submit">Save</button>
                            <button type="reset" id="reset" onClick={handleFormReset}>Cancel</button>
                        </fieldset>
                    </form>
                </div>
            )}
        </>
    );
}

export default UsernameEditForm;
