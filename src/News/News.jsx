import React from 'react';
import NewsLister from './NewsLister';

const News = (props) => {
  return (

    <ul className='px-8 flex flex-col justify-center text-center mt-5 '>
        {props.data.map(data=> <NewsLister author={data.author} title={data.title} img={data.img} date={data.date} content={data.content} /> )}
    </ul>

  )
}

export default News