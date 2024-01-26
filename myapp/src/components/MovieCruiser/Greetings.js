import React from 'react'

const Greetings = () => {
    const time = new Date().getHours();
    const realTime = new Date().toLocaleTimeString();
    let greeting = '';
    let cssStyle = {}
    if(time >=0 && time<12){
        greeting = "Good Morning!";
        cssStyle.color = "Green";
    }
    else if(time>=12 && time <=16){
        greeting = "Good Afternoon!";
        cssStyle.color = "Orange";
    }
    else{
        greeting = "Good Night!";
        cssStyle.color = "Black";

    }
    return (
    <>
        <h3><span style={cssStyle}>Hello {greeting} and the time is {realTime}</span></h3>
    </>
  )
}

export default Greetings
