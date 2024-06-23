import React, { useState } from 'react';
import './Appp.css';

const App = () => {
  const [activeRow, setActiveRow] = useState(null);

  const handleClick = (index) => {
    setActiveRow(activeRow === index ? null : index);
  };

  return (
    <div className="app">
      <h1 className="title">Title</h1>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className="row">
          <button className="toggle-button" onClick={() => handleClick(index)}>
            {activeRow === index ? 'Hide Cards' : 'Show Cards'}
          </button>
          {activeRow === index && (
            <div className="cards">
              {Array.from({ length: 10 }, (_, cardIndex) => (
                <div key={cardIndex} className="card">
                  Card {cardIndex + 1}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
