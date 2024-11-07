import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css';
import { modify } from "../../reduxStore/userSlice";

function UsernameEditForm() {
    // Accéder aux données de l’utilisateur dans le state global
    const dispatch = useDispatch();
    const { data: user } = useSelector((state) => state.user);
    const firstname = user?.firstname || '';
    const lastname = user?.lastname || '';
    const currentUsername = user?.username || '';

    // État local pour l'édition
    const [toEdit, setEdit] = useState(false);
    const [username, setUsername] = useState(currentUsername);

    // Ouverture/Fermeture du mode édition
    const openAndCloseEdit = () => {
        setEdit(!toEdit);
    };

    // Mettre à jour l'username localement
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Réinitialiser le formulaire et fermer l'édition
    const handleFormReset = () => {
        setUsername(currentUsername); // Rétablir la valeur actuelle
        openAndCloseEdit();
    };

    // Soumettre le formulaire
    const handleFormSubmit = (event) => {
        event.preventDefault();
        dispatch(modify({ username })).unwrap()
            .then(() => {
                console.log('Username updated successfully');
                openAndCloseEdit();
            })
            .catch((error) => {
                console.error('Error updating username:', error);
            });
    };

    return (
        <>
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
