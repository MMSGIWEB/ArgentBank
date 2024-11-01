import { NavLink } from "react-router-dom";
import UsernameEditForm from "./userNameEdit";


function UserHomePage() {
    return (
        <>
            <UsernameEditForm />
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x3448)</h3>
                    <p className="account-amount">$48,049.43</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <NavLink to="/bankStatements" className="account-content-wrapper cta">
                    <button className="transaction-button">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </NavLink>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x3448)</h3>
                    <p className="account-amount">$48,049.43</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <NavLink to="/bankStatements" className="account-content-wrapper cta">
                    <button className="transaction-button">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </NavLink>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x3448)</h3>
                    <p className="account-amount">$48,049.43</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <NavLink to="/bankStatements" className="account-content-wrapper cta">
                    <button className="transaction-button">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </NavLink>
            </section>
        </>
    )
}

export default UserHomePage;