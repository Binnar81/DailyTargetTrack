import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [chipName, setChipName]=useState("");
  const [chipsList, setChipsList]=useState([]);

  const handleChange=(e)=>{
if(e.key==="Enter" && chipName.trim()!==""){
  setChipsList([...chipsList, chipName]);
  setChipName("")
}
  }

  const removeChip=(index)=>{
    const newList=chipsList?.map((_, i)=>i!==index)
    setChipsList(newList)
  }


  
  return(
 <>
 <h1>Chips UI</h1>
<input 
type='text'
value={chipName}
onChange={(e)=>setChipName(e.target.value)}
onKeyDown={handleChange}

/>

<div>
  {
    chipsList?.map((chip, index)=>(
      <span>{chip}<button onClick={(s)=>removeChip(index)}>X</button></span>
    ))
  }
</div>
    </>
  )
}

export default App
