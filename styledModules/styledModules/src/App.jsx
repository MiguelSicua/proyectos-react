import { useState } from 'react'
import './App.css'
import Cards from './Components/Card/Cards'
import { GlobalStyles } from './Components/GlobalComponents'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <GlobalStyles/>
        <Cards/>
      </div>
    </>
  )
}

export default App
