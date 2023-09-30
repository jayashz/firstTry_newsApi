import React, { useEffect, useState } from 'react';
import Select from './Select';

const Nav = () => {

   const [search,setSearch]= useState('country');
   const changeHandler=(data)=>{
    console.log(data);
    };

    useEffect(()=>{
        if(search==='country'){
            
        }
    },[search]);

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