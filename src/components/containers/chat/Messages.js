import React, { useEffect, useRef, useState } from 'react'

const Messages = (props) => {
    const connection = props.connection;
    const intialArray = [];
    const [chat, setChat] = useState(intialArray);
    useEffect(() => {
        connection
            .start()
            .then(() => {
                connection.on('receiveMessage', message => {
                    setChat([...intialArray, message]);
                    intialArray.push(message);
                });
            }).catch((error) => console.error(error));
    }, [])

    return (
        chat?.map((chat, index) => (
            <div key={index}>
                {chat}
            </div>
        ))
    )
}

export default Messages