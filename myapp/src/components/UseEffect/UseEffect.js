import React, { useEffect, useState } from 'react'
export default function UseEffect() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const handleIncrese = () => {
        setCount(count+1);
    }
    const handleDecrese = () => {
        setCount2(count2-1);
    }
    useEffect(()=>{
        console.log("Use Effect Called")
    },[count])
    return (
    <>
     <span>{count}</span>
     <div>{count2}</div>
     <button type='button' onClick={handleIncrese}>Increase</button> 
     <button type='button' onClick={handleDecrese}>Decrease</button> 
    </>
  )
}
