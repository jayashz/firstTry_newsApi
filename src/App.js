
import { useEffect, useState } from 'react';
import './App.css';
import Head from './Header/Head';
import News from './News/News';

function App() {
  const [news,setNews] = useState([]);
  useEffect(()=>{
    Fetcher();
  },[]);
  async function Fetcher(){
    const response= await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9da8e9b1aea14c13943861291ec1af11',
   {
    signal: AbortController.signal
   });
    const data =await response.json();
    console.log(data);
    const trasformedData= data.articles.map((data)=>{
      return{
        author:data.author,
        title:data.title,
        img:data.urlToImage,
        date:data.publishedAt,
        content:data.content
      }
    });
    setNews(trasformedData);
    console.log(trasformedData);

  }

  return (
    <>
      <Head />
      <News data={news} />
    </>
  );
}

export default App;
