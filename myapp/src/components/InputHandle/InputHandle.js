import React, { useState } from "react";
import "./InputHandle.css";
const InputHandle = () => {
    const [inputText, setInputVal] = useState("");
    const [previewText, setPreviewText] = useState("");
    const [letterLength, setLetterLength] = useState("");
    const [wordLength, setWordLength] = useState("");
    const inputChangeHandle = (e) =>{
        setInputVal(e.target.value);
    }
    const handleUpperCase = () =>{
        const newText = inputText.toUpperCase();
        setInputVal(newText);
    };
    const handleLowercase = () =>{
        const newText = inputText.toLocaleLowerCase();
        setInputVal(newText);
    };
    const handleCleartext = () =>{
        setInputVal("");
        setPreviewText("")
        setLetterLength("");
        setWordLength("");
    };
    const handleCheckPreview = () =>{
        setPreviewText(inputText);
    };
    const handleLetterLength = () => {
      setLetterLength(inputText.length);
    }
    const handleWordLength = () => {
      setWordLength(inputText.split(" ").length);
    }

    // background color change
    const defaultColor = "#0018ff47";
    const [bgStyle, setBgStyle] = useState({
      background: defaultColor,
    });
    const toggleBackground = () => {
      if(bgStyle.background === defaultColor){
        console.log("test");
        setBgStyle({
          backgroundColor : "rgb(52 71 255 / 77%)",
          })
      }
      else{
        setBgStyle({
          background : defaultColor,
        })
      }
    };
  return (
    <>
      <section className="formHandle" style={bgStyle}>
        <div className="container">
          <div className="formBlock">
            <form>
              <div className="input">
                <textarea placeholder="Enter the text" onChange={inputChangeHandle} value={inputText}/>
              </div>
              <div className="inputBtn">
                <button type="button" onClick={handleUpperCase}>Convert Uppercase</button>
                <button type="button" onClick={handleLowercase}>Convert Lowercase</button>
                <button type="button" onClick={handleCleartext}>Clear Text</button>
                <button type="button" onClick={handleCheckPreview}>Check Preview</button>
                <button type="button" onClick={handleLetterLength}>Letter Length</button>
                <button type="button" onClick={handleWordLength}>Word Length</button>
                <button type="button" onClick={toggleBackground}>Change BG</button>
              </div>
              <p>{previewText}</p>
              <p>{letterLength}</p>
              <p>{wordLength}</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default InputHandle;
