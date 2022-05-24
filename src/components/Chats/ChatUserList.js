import React from 'react'
import ChatUser from './ChatUser'

const data = [
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    }
]

const ChatUserList = () => {
    return (
        data.map((user, index) => (
            <ChatUser key={index} user={user} />
        ))
    )
}

export default ChatUserList