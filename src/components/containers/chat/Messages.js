import React, { useEffect, useRef, useState } from 'react'

const Messages = (props) => {
    const connection = props.connection;
    const intialArray = [];
    const [chat, setChat] = useState(intialArray);
    const [user, setUser] = useState();
    useEffect(() => {
        connection.on('ReceiveMessage', message => {
            setChat([...intialArray, message]);
            intialArray.push(message);
        });
        connection.on('GetClients', user => {
            setUser(user);
        })
    }, [])

    return (
        <>
            <h3>
                Messages
            </h3>
            {
                chat?.map((chat, index) => (
                    <div key={index}>
                        {chat}
                    </div>
                ))
            }
            <h3>
                Online Users
            </h3>
            {
                user?.map((user, index) => (
                    <div key={index}>
                        {user}
                    </div>
                ))
            }
        </>
    )
}

export default Messages