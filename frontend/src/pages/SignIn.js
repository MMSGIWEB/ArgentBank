import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { login } from '../reduxStore/userSlice';  // Assurez-vous du bon chemin d'importation

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //initialise l'état des pp
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    // extrait les valeurs/ l'état de :
    const { isLoading, error, token } = useSelector((state) => state.user);

    // Effect qui surveille le changement du token pour rediriger l'utilisateur après la connexion
    useEffect(() => {
        if (token) {
            navigate('/user');  // Redirection après la connexion réussie
        }
    }, [token, navigate]);  // Dépend de 'token' pour se déclencher après qu'il soit mis à jour

    const handleChange = (e) => {
        // destructuration ppur extraire les valeurs au changement
        const { name, value } = e.target;
        setCredentials(prevState => ({
            ...prevState, //  crée une copie de l'état actuel du credentials
            [name]: value //[] : pp à mettre à jour
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Si champs ne sont pas vides
        if (credentials.email !== '' && credentials.password !== '') {
            // Appel de login Redux
            dispatch(login(credentials));  // Action asynchrone
        }
    };

    return (
        <>
            {/* si token n'existe pas */}
            {!token && (
                <main className='main bg-dark'>
                    <section className='sign-in-content'>
                        <i className='fa fa-user-circle sign-in-icon'></i>
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            <div className='input-wrapper'>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={credentials.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='input-wrapper'>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    value={credentials.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='input-remember'>
                                <input type='checkbox' id='remember-me' name='remember-me' />
                                <label htmlFor='remember-me'>Remember me</label>
                            </div>
                            <button type='submit' className='sign-in-button' disabled={isLoading}>
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
