import Navbar from "../components/navbar/navbar";
import SignInForm from "../components/signIn/signInForm";


function SignIn() {
    return (
        <>
            <nav className="main-nav">
                <Navbar />
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <SignInForm />
                </section>
            </main>
        </>
    )
}

export default SignIn;