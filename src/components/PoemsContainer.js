import React from "react";
import Poem from "./Poem";



function PoemsContainer({ poems, setPoems}) {
  
  return (
    <div className="poems-container">
      {
      poems.map((elemente) => {
        return <Poem key={elemente.id} poem={elemente}/>
      })
      }
    </div>
  );
}

export default PoemsContainer;
