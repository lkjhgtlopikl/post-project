import Header from './components/Header';
import React, { useState } from 'react';
import Button from './components/Button';
import Main from './Main';
export default function Code({ cS,num }) {
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
                </body>) : < Main/>}
        </div>
    );
}