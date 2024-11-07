import UsernameEditForm from "../components/user/userNameEdit";


function User() {
    return (
        <main className="main bg-dark">
            <UsernameEditForm />
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div to="/bankStatements" className="account-content-wrapper cta">
                    <button className="transaction-button">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$1184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div to="/bankStatements" className="account-content-wrapper cta">
                    <button className="transaction-button">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default User;