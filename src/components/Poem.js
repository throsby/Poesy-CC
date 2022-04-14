import React from "react";
import { useState } from "react"

function Poem({ poem }) {
  let { title, content, author } = poem
  const [read, setRead] = useState(false)

  const handleRead = () => {
    setRead(!read)
  }

  const deletePoem = async () => {
    await fetch(`http://localhost:8004/poems/${poem.id}`,{method: "DELETE"})

    // filter here :(
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleRead} >{read ? "Mark as read" : "Mark as unread"}</button>
      <button onClick={deletePoem} >Delete</button>
    </div>
  );
}

export default Poem;
