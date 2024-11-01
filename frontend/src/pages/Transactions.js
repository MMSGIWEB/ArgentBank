import TransacsList from "../components/bankStatements/transacsList";
import UserNav from "../components/navbar/userNav";


function Transactions() {
    return (
        <>
            <UserNav userName="userName" />
            <TransacsList />
            {/* statementBlock */}
            {/* tableau de transactions aka <Transactions />*/}
        </>
    )
}

export default Transactions;