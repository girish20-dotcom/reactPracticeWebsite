import React, { useState } from 'react'
import "./RefreshTimeOnClick.css";
const RefreshTimeOnClick = () => {
    let time = new Date().toLocaleTimeString();
    let [changeTime, setTimeChange] = useState(time);
    const timeChangeHandle = () => {
        let time = new Date().toLocaleTimeString();
        setTimeChange(time);
    }
  return (
    <>
        <section className='refreshTimeOnClick'>
                <h1>Time is <span>"{changeTime}"</span></h1>
                <button type='button' onClick={timeChangeHandle}>Change Time</button>
        </section> 
    </>
  )
}

export default RefreshTimeOnClick
