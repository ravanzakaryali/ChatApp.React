import { Avatar, Typography } from '@mui/material'
import React from 'react'
import ChatSenderDate from '../Item/ChatSenderDate'
import Message from '../Item/Message'
import MessageList from '../Item/MessageList'
import Row from '../Item/Row'
import { AiOutlineClockCircle } from 'react-icons/ai';

const ConversationMessage = ({ position, user, message }) => {
    return (
        position !== "end" ?
            <MessageList>
                <Avatar
                    alt={`${user?.name} ${user?.surname}`}
                    src={user?.avatar}
                    sx={{ width: 42, height: 42 }}
                />
                <Message>
                    <Row>
                        <div>
                            {message?.content}
                            <ChatSenderDate>
                                <AiOutlineClockCircle />
                                {message?.senderDate}
                            </ChatSenderDate>
                        </div>
                        <div className='chat-name'>
                        </div>
                    </Row>
                </Message>
            </MessageList>
            :
            <MessageList justifyContent="end">
                <Message
                    color="black"
                    backgroundColor="gray"
                    borderRadius="10px 10px 0px 10px"
                >
                    <Row>
                        <div>
                            {message?.content}
                            <ChatSenderDate>
                                <AiOutlineClockCircle />
                                {message?.senderDate}
                            </ChatSenderDate>
                        </div>
                        <div className='chat-name'>
                        </div>
                    </Row>
                </Message>
                <Avatar
                    alt={`${user?.name} ${user?.surname}`}
                    src={user?.avatar}
                    sx={{ width: 42, height: 42 }}
                />
            </MessageList>

    )
}

export default ConversationMessage