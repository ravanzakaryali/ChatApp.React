import { Avatar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChatSenderDate from '../Item/ChatSenderDate'
import Message from '../Item/Message'
import MessageList from '../Item/MessageList'
import Row from '../Item/Row'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { grey } from '@mui/material/colors'

const ConversationMessage = ({ position, user, message }) => {
    return (
        position !== "end" ?
            <MessageList>
                <Avatar
                    alt={`${user?.name} ${user?.surname}`}
                    src={user?.avatar}
                    sx={{
                        width: 42,
                        height: 42,
                        margin: '0 5px 0 10px',
                        borderRadius: '50%',
                        marginTop: 'auto',
                    }}
                />
                <Row sx={{
                    margin: '5px 0px'
                }}>
                    <Message
                        marginBottom="10px"
                    >
                        {message?.content}
                        <ChatSenderDate>
                            <AiOutlineClockCircle />
                            {message?.senderDate}
                        </ChatSenderDate>
                    </Message>
                </Row>
            </MessageList>
            :
            <MessageList justifyContent="end">
                <Message
                    color="black"
                    backgroundColor={grey[200]}
                    borderRadius="10px 10px 0px 10px"
                    marginBottom="10px"

                >
                    <Row sx={{
                        margin: '5px 0px'
                    }}>
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
                    sx={{
                        width: 42,
                        height: 42,
                        margin: '0 0 0 5px',
                        borderRadius: '50%',
                        marginTop: 'auto',
                    }}
                />
            </MessageList>

    )
}

export default ConversationMessage