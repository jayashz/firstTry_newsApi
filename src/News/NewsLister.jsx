import React, { useState } from 'react'
import './Newslister.css';
import ReactCardFlip from 'react-card-flip';

const NewsLister = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    if(isFlipped){
      setIsFlipped(false);
    }
    else{

      setIsFlipped(true);
    }
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className='flex gap-1 bg-slate-600 m-4 p-4 rounded-xl'>
        <div className='flex-1'>
          <img className='rounded-xl  image ' src={props.img} alt="" />
        </div>
        <div className='flex-1 flex flex-col items-center justify-center'>
          <p className='text-3xl text-white mb-3 '>{props.title}</p>
          <button className='bg-white rounded-xl p-2' onClick={flipCard}>Click to flip</button>
        </div>
      </div>
      <div className='bg-slate-600 m-4 p-4 rounded-xl h-72  ' >
        <div >
          <h3>{props.date}</h3>
          <p className='text-3xl text-white mb-3 '>{props.content}</p>
        </div>
        <button className='bg-white rounded-xl p-2' onClick={flipCard}>Click to flip</button>
      </div>
    </ReactCardFlip>


    
  )
}

export default NewsLister