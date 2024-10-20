import React from 'react';

const Message = ({ text, color }) => {
    return (
        <p className="message" style={{ color }}>
            {text}
        </p>
    );
};

export default Message;