import React, { useState } from 'react'


const SendMessage = (props) => {
    const [message, sendMessage] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();

        const isMessageProvided = message && message !== '';

        if (isMessageProvided) {
            props.sendMessage(message);
        } else {
            console.warn('Please insert a message');
        }
    };
    const onMessageUpdate = (e) => {
        sendMessage(e.target.value);
    };
    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="message">Message:</label>
                <input
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={onMessageUpdate}
                />
                <button >Send</button>
            </form>
        </>
    )
}

export default SendMessage