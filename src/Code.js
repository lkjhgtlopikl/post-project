import Header from './components/Header';
import React, { useState } from 'react';
import Button from './components/Button';
import App from './App';
export default function Code({ cS,num }) {
    let number = 1
    const [activeComponent, setActiveComponent] = useState("Code");
    const handleSendNullClick = (e) => {
        setActiveComponent(null);
    };
    return (

        <div>
            {activeComponent != null ? (
                <body>
                    <p>Ваш номер в очереди:</p>
                    <div className='code' >{cS+num}
                    </div>
                    <Button onClick={handleSendNullClick} text={"На главную"}></Button>
                </body>) : <App />}
        </div>
    );
}