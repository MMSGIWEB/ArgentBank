import { NavLink } from "react-router-dom";
import UsernameEditForm from "./userNameEdit";


function UserHomePage() {
    return (
        <>
            <UsernameEditForm />
            <h2 className="sr-only">Accounts</h2>
            <account className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <NavLink to="/bankStatements" className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </NavLink>
            </account>
            <account className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <NavLink to="/bankStatements" className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </NavLink>
            </account>
            <account className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <NavLink to="/bankStatements" className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </NavLink>
            </account>
        </>
    )
}

export default UserHomePage;