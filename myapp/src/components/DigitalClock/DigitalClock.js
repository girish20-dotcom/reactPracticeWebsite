import React, { useState } from 'react'
import "./DigitalClock.css";
const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
    const [newTime, setNewTime] = useState(time);
    const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        setNewTime(time);
    }
    setInterval(updateTime,1000);
  return (
    <>
    <div className='digitalClock'>
        <h1>{newTime}</h1>
    </div>
    </>
  )
}

export default DigitalClock
