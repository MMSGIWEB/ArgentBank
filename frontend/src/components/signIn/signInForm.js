import { NavLink } from "react-router-dom";


export default function SignInForm() {
    return (
        <>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label
                    ><input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label
                    ><input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                    >Remember me</label
                    >
                </div>
                {/*  PLACEHOLDER DUE TO STATIC SITE */}
                {/* <NavLink to=chemin + map ou request; conditions de connexion; token; etc. className="sign-in-button"></NavLink> */}
                {/* SHOULD BE THE BUTTON BELOW */}
                <NavLink to="/user">
                    <button className="sign-in-button">Sign In</button>
                </NavLink>
            </form>
        </>
    )
}