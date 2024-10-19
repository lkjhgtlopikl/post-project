import Header from './components/Header';
import React, { useState } from 'react';
import Button from './components/Button';
import App from './App';
export default function Code({ cS }) {
    let number = 1
    const [activeComponent, setActiveComponent] = useState("Code");
    const handleSendNullClick = (e) => {
        setActiveComponent(null);
    };
    function CodeGeneration(cS, number) {
        return cS;
    }
    return (

        <div>
            {activeComponent != null ? (
                <body>
                    <p>Ваш номер в очереди:</p>
                    <div className='code' >{cS}
                    </div>
                    <Button onClick={handleSendNullClick}>На главную</Button>
                </body>) : <App />}
        </div>
    );
}