import React, { useEffect, useState } from 'react';

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10') 
      .then(response => response.json())
      .then(data => {
        console.log('Random quotes data:', data);
        setQuotes(data); 
      })
      .catch(error => {
        console.error('Error fetching random quotes:', error);
      });
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <ul className="quotes-list">
        {quotes.map((quote, index) => (
          <li key={index}>
            <p>{quote.text}</p>
            {quote.book && (
              <p>
                <em>— {quote.book.title}</em>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuotesPage;
