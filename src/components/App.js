import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import { useState, useEffect } from "react"

function App() {
  const [ formUp, setFormUp ] = useState(false)
  const [ poems, setPoems] = useState([])

  const fetchFunc = async () => {
    let req = await fetch("http://localhost:8004/poems")
    let res = await req.json()
    setPoems(res)
  }

  useEffect(fetchFunc, [])

  const toggleForm = () => {
    setFormUp(!formUp)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={toggleForm} >Show/hide new poem form</button>
        {formUp ? <NewPoemForm setPoems={setPoems}/> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
