import React from 'react'
import SendMessage from './SendMessage'

const Chat = (props) => {
    const sendMessage = (message) => {
        console.log(message);
    };
    return (
        <SendMessage sendMessage={sendMessage} />
    )
}

export default Chat