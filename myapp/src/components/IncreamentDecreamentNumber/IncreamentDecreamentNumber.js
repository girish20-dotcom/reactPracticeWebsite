import React, { useState } from 'react'
import "./IncreamentDecreamentNumber.css";
const UseState = () => {
    const [number, setNumber] = useState(0);
    const handleNumberIncrease = ()=>{
        setNumber(number+1);
    }
    const handleNumberDecrease =() =>{
        setNumber(number-1);
        if(number <= 0){
            setNumber(0);
            alert("0 limit reached");
        }
    }
    return (
    <>
    <div className='number'>
        <p>{number}</p>
        <span id='myMessage'></span>
        <div className='btnRows'>
            <button type='button' onClick={handleNumberIncrease}>Increase Number</button>
            <button type='button' onClick={handleNumberDecrease}>Decrease Number</button>
        </div>
    </div>
    </>
  )
}

export default UseState
