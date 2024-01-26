import React from 'react'

const SearchResult = (props) => {
const img = `https://source.unsplash.com/400x300/?${props.name}`;  
return (
    <>

        <div className='imageWrap'>
            <img src={img} alt={"name"}/>
        </div> 
    </>
  )
}

export default SearchResult
