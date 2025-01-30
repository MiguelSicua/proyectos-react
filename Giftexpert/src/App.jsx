import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import DisplayGifs from './components/DisplayGifs';


function App() {
  const [category, setCategory] = useState("");
  //const [count, setCount] = useState(0);

  return (
    <>
    <div className="App">
      <h1>Gif Expert App</h1>
      <AddCategory setCategory={setCategory}/>
      <DisplayGifs category={category}/>
    </div>
    </>
  )
}

export default App
