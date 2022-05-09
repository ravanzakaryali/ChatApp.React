import React from 'react'
import SendMessage from './SendMessage'

const Chat = (props) => {
    const connection = props.connection;
    const sendMessage = (message) => {
        connection?.invoke('SendMessageAsync', message)
            .catch(error => console.error(`Invoke SendMessageAsync ${error}`));
    };

    return (
        <SendMessage sendMessage={sendMessage} />
    )
}

export default Chat