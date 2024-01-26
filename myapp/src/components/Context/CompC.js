import React, { useContext } from 'react'
import { UserContext } from './Parent';
const CompC = () => {
  const UserCallContext = useContext(UserContext);
  return (
    <>
    <h1>{UserCallContext}</h1> 
</>

  )
}

export default CompC
