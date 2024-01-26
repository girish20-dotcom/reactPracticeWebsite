import React, {useRef, useState} from 'react'

export default function UseRef() {
    const refElement = useRef("");
    const [name, setName] = useState("");
    console.log(refElement);
    const handleReset = () => {
      setName("");
      refElement.current.focus()
    }
    const handleInput = () =>{
      refElement.current.style.color = "red";
    }
    return (
    <>
      <input ref={refElement} onChange={(e)=> setName(e.target.value)} type='text' value={name} />
      <button type='button' onClick={handleReset}>Reset</button>
      <button type='button' onClick ={handleInput}>Style</button>
    </>
  )
}
