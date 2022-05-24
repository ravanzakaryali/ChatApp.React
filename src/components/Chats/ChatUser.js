import { Avatar, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import AvatarOnline from '../Avatar/AvatarOnline'
import ChatUserContent from '../Item/ChatUserContent'
import Row from '../Item/Row'


const ChatUser = ({ user }) => {
    return (
        <Container>
            <Row>
                <AvatarOnline
                    user={user}
                />
                <ChatUserContent>
                    <Typography>
                        {user?.name}
                    </Typography>
                    <Typography
                        sx={{
                            color: "gray"
                        }}
                    >
                        {user?.message}
                    </Typography>
                </ChatUserContent>
            </Row>
        </Container>

    )
}

export default ChatUser