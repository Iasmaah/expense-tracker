import './index.css';
import {useState, useEffect} from 'react'
import Balance from "./Balance"
import History from "./History"
import AddNew from "./AddNew"
import { onSnapshot, addDoc, doc, deleteDoc } from 'firebase/firestore'
import {entriesCollection, db } from './Firebase'


function App() {

  const [balance, setBalance] = useState({income: 0, expense:0})
  const [entries, setEntries] = useState([])
  const [amount, setAmount] = useState(1)
  const [category, setCategory] = useState('expense')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (amount === 0) return;
  
    const newEntry = {
      amount: amount, 
      category:category,
      description: e.target.description.value,
      date: e.target.date.value}
      
    // push new entry to firebasestore
    addDoc(entriesCollection, newEntry)
    setEntries(oldState => ([ newEntry,  ...oldState, ]))
  }
  async function handleDelete(id) {
    const docRef = doc(db, "entries", id)
    await deleteDoc(docRef)
  }

  useEffect(()=>{
    const unsubscribe = onSnapshot(entriesCollection, (snapshot)=> {
      // get data from firebase
      const entriesArray = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setEntries(entriesArray)
    })
    return unsubscribe
  }, [])
  
  useEffect(()=>{
    const entriesBalance = {income: 0, expense:0}
    for (let i =0; i < entries.length; i++){
      const entry = entries[i]
      if (entry.category === 'expense'){entriesBalance.expense += entry.amount}
      else if (entry.category === 'income'){entriesBalance.income += entry.amount}
    }
    setBalance(entriesBalance)
  }, [entries])

  return (
    <>
    <header>
      <h1 id='title' >Simple Expense Tracker</h1>

    </header>
    <div id='container' >
        <Balance balance={balance}/>
        <AddNew 
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          handleSubmit={handleSubmit}
        />
        <History 
        entries={entries} 
        handleDelete={handleDelete}
        />
        
    </div>
    </>
    
  );
}

export default App;

/** Upcoming Functions 
 * 
 * Task: History should be ordered by date
 * Task: decultter code, and make it DRY
 * Task: Add darkmode
 * Task: make a seperate page for history with 'show all link'
 * Task: allow users to filter down history items
 * Task: 
 */
