import React from 'react'
import ChatsSidebar from '../../components/Chats/ChatsSidebar';
import ChatUserList from './ChatUserList';


const ChatUsersSidebar = () => {
    return (
        <>
            <ChatsSidebar />
            <ChatUserList />
        </>
    )
}

export default ChatUsersSidebar