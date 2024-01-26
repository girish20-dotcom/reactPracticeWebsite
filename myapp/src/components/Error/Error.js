import React from 'react'
import "./Error.css";
import ErrorImage from "../../images/error.jpg";
import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <>
    <div className='errorImageWrap'>
    <div className='container'>
        <img src={ErrorImage} alt="404 error"/>
        <div className='btnRow'>
            <NavLink className={"goBackBtn"} to={'/'}>Go Back</NavLink>
        </div>
    </div>
    </div>
    </>
  )
}

export default Error