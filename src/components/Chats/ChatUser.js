import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import AvatarOnline from '../Avatar/AvatarOnline'
import ChatUserContent from '../Item/ChatUserContent'
import LinkFlex from '../Item/LinkFlex'
import Row from '../Item/Row'


const ChatUser = ({ user }) => {
    return (
        <LinkFlex to={user.username}>
            <Container sx={{
                padding: "10px 0px"
            }}>
                <Row>
                    <AvatarOnline
                        user={user}
                    />
                    <Row>
                        <ChatUserContent>
                            <Typography sx={{
                                color: "text.primary",
                            }}>
                                {user?.name} {user?.surname}
                            </Typography>
                            <Typography
                                sx={{
                                    color: "text.primary",
                                }}
                            >
                                {user?.message}
                            </Typography>
                        </ChatUserContent>

                    </Row>
                </Row>
            </Container>
        </LinkFlex>
    )
}

export default ChatUser