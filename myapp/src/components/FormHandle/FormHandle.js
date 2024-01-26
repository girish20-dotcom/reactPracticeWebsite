import React, { useState } from "react";
import "./FormHandle.css";
export default function FormHandle() {
  // const [inputName, setInputName] = useState("");
  // const [inputNameD, setInputNameD] = useState("");

  // const [inputEmail, setInputEmail] = useState("");
  // const [inputEmailD, setInputEmailD] = useState("");

  // const [inputPass, setInputPass] = useState("");
  // const [inputPassD, setInputPassD] = useState("");

  // const handleTextChange = (e) =>{
  //     setInputName(e.target.value);
  // }
  // const handleEmailChange = (e) =>{
  //     setInputEmail(e.target.value);
  // }
  // const handlePasswordChange = (e) =>{
  //     setInputPass(e.target.value);
  // }
  // const handleSubmit = (e) =>{
  //     e.preventDefault();
  //     console.log("formSubmit");
  //     setInputNameD(inputName);
  //     setInputEmailD(inputEmail);
  //     setInputPassD(inputPass);
  // }

  //
  const [details, setDetails] = useState({
    name : "",
    email : "",
    password : "",
    address : "",
});

  const handleInputChange = (event) =>{
    // console.log(event.target);
    const {name, value} = event.target;
    // const name = event.target.name;
    // const value = event.target.value;
    setDetails({...details, [name]:value})
  }
  const [detailsDisplay, setDisplay] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setDisplay(details);
  };

  return (
    <>
      <section className="formSection">
        <div className="container">
          <form onSubmit={handleSubmit}
          >
            <div className="inputRow">
              <div className="formInputs">
                <input
                  name="name"
                  type="text"
                  value={details.name}
                  onChange={handleInputChange}
                  placeholder={"Enter the name"}
                />
              </div>
              <div className="formInputs">
                <input
                  type="email"
                  name="email"
                  value={details.email}
                  onChange={handleInputChange}
                  placeholder={"Enter the email"}
                />
              </div>
              <div className="formInputs">
                <input
                  type="password"
                  name="password"
                  value={details.pass}
                  onChange={handleInputChange}
                  placeholder={"Enter the password"}
                />
              </div>
              <div className="formInputs">
                <input
                  type="text"
                  name="address"
                  value={details.pass}
                  onChange={handleInputChange}
                  placeholder={"Enter the address"}
                />
              </div>
            </div>
            <div className="btnRow">
              <button type="submit" className="btnSubmit">
                Submit
              </button>
            </div>
          </form>
          {/* <p>{details.name}</p>
          <p>{details.email}</p>
          <p>{details.password}</p>
          <p>{details.address}</p> */}
          <p>{detailsDisplay.name}</p>
          <p>{detailsDisplay.email}</p>
          <p>{detailsDisplay.password}</p>
          <p>{detailsDisplay.address}</p>
        </div>
      </section>
    </>
  );
}