import React from 'react'
import Header from '../Header/Header'
import ChatConversation from './ChatConversation'
import SendMessage from './SendMessage'

const Chats = () => {
    return (
        <>
            <Header />
            <ChatConversation />
            <SendMessage />
        </>
    )
}

export default Chats