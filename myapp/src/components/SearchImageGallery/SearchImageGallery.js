import React, { useState } from 'react'
import SearchResult from './SearchResult';
import "./SearchImageGallery.css";
const SearchImageGallery = () => {
    const [search, setSearch] = useState("");
    const handleOnChange = (e) =>{
        setSearch(e.target.value);
    }
    return (
    <>
    <section className='searchGallery'>
      <div className='container'>
        <h1>Search Image Gallery</h1>
        <input onChange={handleOnChange} type='text' value={search} placeholder='Search Image'/>
        <SearchResult name={search}/>
      </div>
    </section>
    </>
  )
}

export default SearchImageGallery
