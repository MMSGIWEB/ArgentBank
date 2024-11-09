import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { login } from "../reduxStore/userSlice";  // Assurez-vous du bon chemin d'importation

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const { isLoading, error, token, data: user } = useSelector((state) => state.user);

    // Effect qui surveille le changement du token pour rediriger l'utilisateur après la connexion
    useEffect(() => {
        if (token) {
            console.log("User Info:", user); // Affiche les données utilisateur récupérées (firstName, lastName, username)
            navigate("/user");  // Redirection après la connexion réussie
        }
    }, [token, navigate]);  // Dépend de 'token' pour se déclencher après qu'il soit mis à jour

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.email !== '' && credentials.password !== '') {
            // Appel de login Redux
            dispatch(login(credentials));  // Cette action est asynchrone
        }
    };

    return (
        <>
            {!token && (
                <main className="main bg-dark">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-wrapper">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" name="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button type="submit" className="sign-in-button" disabled={isLoading}>
                                {isLoading ? 'Loading...' : 'Sign In'}
                            </button>
                        </form>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </section>
                </main>
            )}
        </>
    );
}

export default SignIn;
