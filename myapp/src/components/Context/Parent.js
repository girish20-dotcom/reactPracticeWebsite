import React, { createContext } from 'react'
import CompA from './CompA'
const UserContext = createContext();
const Parent = () => {
    
  return (
    <>
        <div className='container'>
        <UserContext.Provider value={"This is Data from \"Context API\"."}>
            <CompA/>
        </UserContext.Provider>    
        </div>
    </>
  )
}

export default Parent
export {UserContext}
