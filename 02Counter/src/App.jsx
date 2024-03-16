import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]  = useState(12);

  function addValue(){
    if(counter < 20)
       {
        setCounter(counter + 1);
      }
  }
  function removeValue(){
    if(counter > 0){
      setCounter(counter - 1);
    }
    
  }


  return (
    <>
      <h1>Chai and React</h1>
      <p>Counter value = {counter}</p>
      <button onClick={addValue}>Add {counter}</button>
      <br />
      <button onClick={removeValue}>Remove {counter}</button>
    </>
    
  )
}

export default App
