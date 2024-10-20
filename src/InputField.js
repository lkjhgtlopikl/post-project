import React from 'react';

const InputField = ({ label, type, value, onChange, id }) => {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={`Введите ${label.toLowerCase()}`}
                value={value}
                onChange={onChange}
                required
            />
        </div>
    );
};

export default InputField;