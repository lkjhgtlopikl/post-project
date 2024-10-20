import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Code from './Code';
import { btn } from './data';

function Main() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [codeStart, setCodeStart] = useState('');
  const [num, setNum] = useState(0);

  const handleSendCodeClick = (e) => {
    const codeStart = e.currentTarget.dataset.value;
    if (codeStart) {
      setCodeStart(codeStart);
      setNum(num + 1)
      setActiveComponent('Code');
    } else {
      console.error("data-value не найдено");
    }
  };

  return (
    <div>
      {activeComponent === null ? (
        <body>
          <Header>Выберите услугу</Header>
          <div className='buttons'>
            {btn.map(b => <Button{...b} onClick={handleSendCodeClick} key={b.id}/>)}

          </div>
        </body>
      ) : (
        <Code cS={codeStart} num={num} />
      )}
    </div>
  );
}

export default Main;
