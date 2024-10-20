import React, { useState } from 'react';
import InputField from './InputField'; // Импортируем компонент InputField
import Message from './Message'; // Импортируем компонент Message
import './LoginForm.css'; // Убедитесь, что путь к вашему CSS файлу правильный
import CryptoJS from 'crypto-js';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('#FF0000');

    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем отправку формы

        const encryptedData = CryptoJS.AES.encrypt(password, 'pAssW0rd_').toString();

        fetch('http://109.254.29.154:8000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: login,
                data: encryptedData
            })
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
        });
    };

    return (
        <div className="container">
            <form id="loginForm" onSubmit={handleSubmit}>
                <h2>Вход в аккаунт</h2>
                <InputField
                    label="Логин"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                />
                <InputField
                    label="Пароль"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                />
                <button type="submit">Войти</button>
                {message && (
                    <Message text={message} color={messageColor} />
                )}
            </form>
        </div>
    );
};

export default LoginForm;