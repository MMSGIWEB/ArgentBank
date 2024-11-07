import { useState, useEffect } from "react";
import './style.css';
import UserNav from "../navbar/userNav";

function UsernameEditForm({ firstname, lastname }) {
    //EDITION DU NOM D'UTILISATEUR

    //état du btn 'edit name' "vide"
    const [toEdit, setEdit] = useState('')
    //ouverture + fermeture du cadre d'édition
    const openAndCloseEdit = () => {
        setEdit(!toEdit)
    }


    // INFOS UTILISATEUR

    //ici ajouter la v du username courant
    const [username, setUsername] = useState('');
    // la v du nouveau 'username'
    const [newUsername, setNewUsername] = useState(username);
    //actions au changement du username
    // useEffect(() => {
    // Mettre à jour le "nom d'utilisateur actuel" après la soumission du formulaire
    //=> if response
    // if ("si .. existe bien alors nv nom") {
    // username();
    // }
    // }, []);

    // const handleEditClick = () => {
    //     setEdit(true);
    // };

    // utiliser useProfile(hook perso?) pour recup les données firstname, lastname


    //FORMULAIRE

    //récup valeur du champ modifiable
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        //useEffect + 2eme state pour mise à jour?
    };

    // vide formulaire + ferme
    const handleFormReset = () => {
        // setUsername(newUsername);
        console.log('canceled!')
        openAndCloseEdit()
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // ajouter requête envoi du form
        console.log('submitted!')


        // Réinitialiser le champ avec la nouvelle valeur
        // setUsername(event.target.value);
        openAndCloseEdit()
    };

    return (
        <>
            {/* voir pour v userName={} */}
            {!toEdit ? (
                <>
                    {/* //faire en sorte que le nom soit mis à jour 
                    apres soumission du form ~'onFrom' ou onChange ou function avec condition setUserName*/}
                    <div className="header">
                        {/* <h1>Welcome back<br />{name}!</h1> */}
                        <h1 className="welcome">Welcome back<br /> {firstname} {lastname} !</h1>
                        {/* au click "collapse"/cadre d'édition s'ouvre => useState */}
                        <button className="edit-button" onClick={openAndCloseEdit}>Edit Name</button>
                    </div>
                </>
            ) : (
                <>
                    <div className="edit-username" >
                        <h2>Edit user info</h2>
                        <form className="edit-username-form">
                            <fieldset className="form">
                                <div>
                                    <label htmlFor="username">User name</label>
                                    {/* remettre value */}
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
                                <button type="submit" id="submit" onClick={handleFormSubmit}>Save</button>
                                <button type="reset" id="reset" onClick={handleFormReset}>Cancel</button>
                            </fieldset>
                        </form>
                    </div>
                </>
            )}
        </>
    )
}

export default UsernameEditForm;