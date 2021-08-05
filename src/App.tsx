import React, { useState } from 'react';

import Question from './components/Question';


const App: React.FC = () => {
  const [bindIndex, setBindIndex] = useState(11);

  const changeItem = (itemIndex: number): void => {
    if (itemIndex !== bindIndex) setBindIndex(itemIndex);
    if (itemIndex === bindIndex) setBindIndex(11);
  };

  return (
    <div className="wrapper">

      <header className="header">
        <h1 className="header__heading">Frequently asked questions</h1>
        <p className="header__text">Hello! Didn't find what you are looking for? Please contact us.</p>
      </header>

      <section className="questions">
      {Array(10).fill(null).map((_, index) => {
          return (
            <Question 
              key={index}
              handleClick={() => changeItem(index)}
              isCollapsed={bindIndex !== index}
              number={index}
            />
          )
        })}
      </section>
    </div>
  );
}

export default App;
