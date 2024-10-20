import React, { useState } from 'react';
import InputField from './InputField'; // Импортируем компонент InputField
import Message from './Message'; // Импортируем компонент Message
import './LoginForm.css'; // Убедитесь, что путь к вашему CSS файлу правильный

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageColor, setMessageColor] = useState('#FF0000');

    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем отправку формы

        // Пример проверки (здесь можно добавить свою логику)
        if (username === 'admin' && password === 'password') {
            setMessage('Успешный вход!');
            setMessageColor('#00A1FF');
        } else {
            setMessage('Неверный логин или пароль.');
            setMessageColor('#FF0000');
        }
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