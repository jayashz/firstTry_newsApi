
import { useState } from 'react';
import './App.css';
import Head from './Header/Head';
import Nav from './Nav/Nav';
import News from './News/News';

function App() {
  const [news,setNews] = useState([]);
  let [url,setUrl]=useState('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5fbe3943eb6840fb992ed28e48c298e3');
  const searchHandler=(data)=>{
    if(data===10){
      setUrl('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5fbe3943eb6840fb992ed28e48c298e3')
      Fetcher(url);
    }
    else if(data===20){
      setUrl('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5fbe3943eb6840fb992ed28e48c298e3');
      Fetcher(url);
    }
    else{
      setUrl('https://newsapi.org/v2/everything?q=tesla&from=2023-09-01&sortBy=publishedAt&apiKey=5fbe3943eb6840fb992ed28e48c298e3');
      Fetcher(url);
    }
  };

  

  async function Fetcher(url){
    const response= await fetch(url);
    const data =await response.json();

    const trasformedData= data.articles.map((data)=>{
      return{
        author:data.author,
        title:data.title,
        img:data.urlToImage,
        date:data.publishedAt,
        content:data.content,
        id:Math.random()*1000
      }
    });
    setNews(trasformedData);


  }

  return (
    <>
      <Head />
      <Nav onSearch={searchHandler} />
      <News data={news} />
    </>
  );
}

export default App;
