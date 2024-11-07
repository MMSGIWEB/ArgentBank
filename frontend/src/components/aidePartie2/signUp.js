import { NavLink } from "react-router-dom";
import Navbar from "../navbar/navbar";

function SignUp() {
    return (
        <>
            <nav className="main-nav">
                <Navbar />
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign Up</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="firstname">Username</label
                            ><input type="text" id="firstname" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="lastname">Username</label
                            ><input type="text" id="lastname" />
                        </div>
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
                        {/* <NavLink to=chemin + map ou request className="sign-in-button"></NavLink> */}
                        {/* SHOULD BE THE BUTTON BELOW */}
                        {/*  <button className="sign-in-button">Sign In</button> */}
                    </form>
                </section>
            </main>

        </>
    )
}

export default SignUp;