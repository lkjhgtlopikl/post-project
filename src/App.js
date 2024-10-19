import './App.css';

import React, { useState, useEffect  } from 'react';
import Header from './components/Header';
import Button from './components/Button'; 
import Code from './Code';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [codeStart, setCodeStart] = useState('');

  
  const handleSendCodeClick = (e) => {
    console.log(e.currentTarget);
    setActiveComponent('Code');
    const newCodeStart = e.currentTarget.getAttribute('data-value');
    if (newCodeStart) {
      setCodeStart(newCodeStart);
      console.log(newCodeStart);
       // Это должно показать новое значение
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
            <Button data-value={'АК'} onClick={handleSendCodeClick}>Отправить письмо</Button>
            <Button data-value={'БК'} onClick={handleSendCodeClick}>Отправить бандероль</Button>
            <Button data-value={'ВК'} onClick={handleSendCodeClick}>Отправить посылку</Button>
            <Button data-value={'ГК'} onClick={handleSendCodeClick}>Получить письмо/бандероль</Button>
            <Button data-value="ЕМ" onClick={handleSendCodeClick}>Получить посылку</Button>
            <Button data-value="ЖН" onClick={handleSendCodeClick}>Получить товар из интернет-мага</Button>
            <Button data-value="ЗО" onClick={handleSendCodeClick}>Оплатить коммунальные услуги</Button>
            <Button data-value="КР" onClick={handleSendCodeClick}>Получить сим-карту</Button>
          </div>
        </body>
      ) : (
        <Code />
      )}
    </div>
  );
}

export default App;
