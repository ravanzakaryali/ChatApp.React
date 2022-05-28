import React from 'react'
import Scroll from '../Item/Scroll'
import ConversationMessage from './ConversationMessage'

const ChatConversation = () => {
    return (
        <Scroll height="150px">
            <ConversationMessage />
            <ConversationMessage position="end" />
            <ConversationMessage />
            <ConversationMessage position="end" /> <ConversationMessage />
            <ConversationMessage position="end" /> <ConversationMessage />
            <ConversationMessage position="end" /> <ConversationMessage />
            <ConversationMessage position="end" /> <ConversationMessage />
            <ConversationMessage position="end" /> <ConversationMessage />
            <ConversationMessage position="end" /> <ConversationMessage />
            <ConversationMessage position="end" /> <ConversationMessage />
            <ConversationMessage position="end" /> <ConversationMessage />
            <ConversationMessage position="end" /> <ConversationMessage />
            <ConversationMessage position="end" />
        </Scroll>
    )
}

export default ChatConversation