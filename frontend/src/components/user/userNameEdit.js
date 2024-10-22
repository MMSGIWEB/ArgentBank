import { useState } from "react";
import './style.css';
import UserNav from "../navbar/userNav";

function UsernameEditForm({ username, firstname, lastname }) {
    //EDITION DU NOM D§4UTILISATEUR

    //état du btn 'edit name' "vide"
    const [toEdit, setEdit] = useState('')
    //ouverture + fermeture du cadre d'édition
    const openAndCloseEdit = () => {
        setEdit(!toEdit)
    }


    // INFOS UTILISATEUR

    //ici ajouter la v du username courant
    const [currentUsername, setUsername] = useState({ username });
    // const handle


    //FORMULAIRE

    //récup valeur du champ modifiable
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // vide formulaire + ferme
    const handleFormReset = (newUsername) => {
        setUsername(newUsername);
        console.log('canceled!')
        openAndCloseEdit()
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); // pour empêcher le rechargement de la page par défaut
        // ajouter requête envoi du form
        console.log('submitted!')


        // Réinitialiser le champ avec la nouvelle valeur
        // setUsername();
        openAndCloseEdit()
    };

    return (
        <>
            {/* voir pour v userName={} */}
            <UserNav />
            {!toEdit ? (
                <div className="header">
                    {/* <h1>Welcome back<br />{name}!</h1> */}
                    <h1>Welcome back<br /> {firstname} {lastname} !</h1>
                    {/* au click "collapse"/cadre d'édition s'ouvre => useState */}
                    <button className="edit-button" onClick={openAndCloseEdit}>Edit Name</button>
                </div>
            ) : (
                <div className="edit-username" >
                    <h2>Edit user info</h2>
                    <form className="edit-username-form">
                        <fieldset className="form">
                            <div>
                                <label htmlFor="username">User name</label>
                                <input type="text" id="username" name="username" value={currentUsername} onChange={handleUsernameChange} />
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
                            <button type="submit" id="submit" onClick={handleFormSubmit}>Save</button>
                            <button type="reset" id="reset" onClick={handleFormReset}>Cancel</button>
                        </fieldset>
                    </form>
                </div>
            )}
        </>
    )
}

export default UsernameEditForm;