// transactions mode édition lorsqu'on clicque sur 1 des rectangles
import './style.css'
import { NavLink } from 'react-router-dom';
import Transaction from './transaction';
import TransacTitles from './titles';

function TransacsList() {
    return (
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x3448)</h3>
                    <p className="account-amount">$48,049.43</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <NavLink to="/user" className="account-content-wrapper cta">
                    <button className="transaction-button x-mark">
                        <i className="fa-sharp fa-solid fa-xmark"></i>
                    </button>
                </NavLink>
            </section>
            <section className='transac-section'>
                <TransacTitles />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
            </section>

        </>
    )
}

export default TransacsList;