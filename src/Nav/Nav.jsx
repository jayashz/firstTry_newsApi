import React, { useEffect, useState } from 'react';
import Select from './Select';

const Nav = (props) => {

   
   const changeHandler=(data)=>{
    props.onSearch(data);
    };


  return (
    <div className='px-8 bg-seafoam flex items-center justify-center ' >
        <div className='flex '>
            <input type="text"  />
            <Select onSearchChange={changeHandler}/>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Nav