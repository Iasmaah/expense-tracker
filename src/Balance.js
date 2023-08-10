export default function Balance(props){
    return (
        <div className='item balance-item '>
            <div id='balance-state'>
                <h2> YOUR BALANCE </h2>
                <h3 id='balance'> {`$ ${props.balance.income - props.balance.expense}`}</h3>
            </div>
            
            <div id='balance-container'>
                <div className='balance-detail'>
                    <h3 className='balance-detail-title'>INCOME</h3>
                    <h3 className='balance-detail-amount' id='income-balance'>{`$ ${props.balance.income}`}</h3>
                </div>
                <div id='vertical-line'></div>
                <div className='balance-detail'>
                    <h3 className='balance-detail-title'>EXPENSE</h3>
                    <h3 className='balance-detail-amount' id='expense-balance'>{`$ ${props.balance.expense}`}</h3>
                </div>
            </div>
        </div>
    )
}