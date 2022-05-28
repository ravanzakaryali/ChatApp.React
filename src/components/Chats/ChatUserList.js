import React from 'react'
import Scroll from '../Item/Scroll'
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
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
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
        <Scroll height="250px">
            {
                data.map((user, index) => (
                    <ChatUser key={index} user={user} />
                ))
            }
        </Scroll>
    )
}

export default ChatUserList