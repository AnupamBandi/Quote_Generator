import React, { useEffect, useState } from 'react';
import './App.css';
import QuoteGen from './QuoteGen';

function getRandomQuote(quotes){
  return quotes[Math.floor(Math.random()*quotes.length)]

}



function App() {
  const [quotes,setQuotes]=useState([]);
  const [ quote,setQuote]=useState(null);

  useEffect(()=>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>{ if (!res.ok){
      throw new Error("Network response not ok");
    }res.json();
  })
    .then((json)=>{
      setQuotes(json);
      setQuote(getRandomQuote(json));
      
    })
    .catch((error)=>{
      console.log("error:",error)
    });
  },[]);

  function getNewQuote(){
    if (quotes.length>0){
      setQuote(getRandomQuote(quotes));
    }
  }
  return (
    <div className=''>
      <QuoteGen quote={quote} getNewQuote={getNewQuote}/>
    </div>
    
  );
}

export default App;
