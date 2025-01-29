import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'


function App() {
  const [category, setCategory] = useState("");
  //const [count, setCount] = useState(0);

  return (
    <>
    <div className="App">
      <h2>Main component</h2>
      <AddCategory setCategory={setCategory}/>
    </div>
    </>
  )
}

export default App
