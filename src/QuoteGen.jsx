import React from 'react';
import './App.css';

const QuoteGen = ({quote,getNewQuote}) => {
  return (
    <main>
        <h1>Project:Random Quote Generator</h1>
        <section>
        <button onClick={getNewQuote}>
            New Quote
        </button>
        <h3>
            {quote?.text}

        </h3>
        <i>-{quote?.author}</i>
        </section>
    </main>
  )
}

export default QuoteGen