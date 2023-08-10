export default function AddNew(props){
    return (
        <div className='item left-aligned'>
            <h2>New Transaction</h2>
           <hr />
           <form onSubmit={props.handleSubmit}>
           
            <div>
                <label htmlFor="amount">Amount
                <input 
                    type="number"
                    name='amount'
                    id='amount'
                    placeholder='Amount in $'
                    required
                    value={props.amount}
                    min={1}
                    onChange={(e) => {
                        props.setAmount(Number(e.target.value))
                        
                    }}
                /></label>
            </div>
            <div>
                <label >Category
                <select 
                
                name='category'
                   value={props.category}
                   onChange={(e) => {
                       props.setCategory(e.target.value)
                       
                   }} 
                >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
                </select>
                </label>
           </div>
            <div>
                <label htmlFor="description">Description
                <input 
                    type="text"
                    name='description'
                    id='description'
                    placeholder='Description'
                    required
                    // value={props.amount}
                    // min={1}
                    // onChange={(e) => {
                    //     props.setAmount(Number(e.target.value))
                        
                    // }}
                /></label>
            </div>
            <div>
                <label htmlFor="Date">Date 
                <input 
                    type="date"
                    name='date'
                    id='date'
                    placeholder='Date'
                    required
                    // value={props.amount}
                    // min={1}
                    // onChange={(e) => {
                    //     props.setAmount(Number(e.target.value))
                        
                    // }}
                /></label>
            </div>
           
           
            <input type="submit" value="Add" />
           </form>
        </div>
    )
}