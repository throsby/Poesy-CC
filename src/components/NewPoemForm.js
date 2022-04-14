import React from "react";
import { useState } from "react"

function NewPoemForm({ setPoems }) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [text, setText] = useState("")


  const handleYourself = async (e) => {
    e.preventDefault()
    let config = {
      method: "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify({"title": title,"author": author, "content": text })
    }
    let req = await fetch("http://localhost:8004/poems", config)
    let res = await req.json()
    console.log(res)
    setPoems((prevState) => {return [...prevState,res]} )
  }

  return (
    <form onSubmit={handleYourself} className="new-poem-form">
      <input name="title" onChange={(e) => {setTitle(e.target.value)}} placeholder="Title" />
      <input onChange={(e) => {setAuthor(e.target.value)}} placeholder="Author" />
      <textarea onChange={(e) => {setText(e.target.value)}} placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
