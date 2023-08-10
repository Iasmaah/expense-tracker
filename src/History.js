export default function History({entries, handleDelete}){
    const entriesElements = entries.map(entry => (
            <div key={entry.id} className='entry' id={entry.category === 'expense'? 'expense':'income'}>
            <span id='history-amount'> ${entry.amount} | {entry.description}</span>  
             <div>
                <span id='history-date'> | {entry.date} </span>
                <button 
                onClick={() => handleDelete(entry.id)} 
                id='delete-button'>
                    X
                </button>
             </div>
            </div>
        )
        
    )
    // console.log(entriesElements)
    return (
        <div className='item left-aligned'>
            <h2> History </h2>
            <hr />
            { entriesElements }
        </div>
    )
}