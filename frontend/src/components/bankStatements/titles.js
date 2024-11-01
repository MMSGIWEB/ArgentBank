import './style.css';

function TransacTitles() {
    return (
        <div className='titles-container'>
            <article className='titles'>
                <div className='first-b block'>
                    <span>Date</span>
                    <span>Description</span>
                </div>
                <div className='second-b block'>
                    <span>Amount</span>
                    <span>Balance</span>
                </div>
            </article>
        </div>
    )
}

export default TransacTitles;