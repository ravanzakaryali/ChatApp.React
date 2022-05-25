import { Container } from '@mui/material'
import React from 'react'
import ChatHeader from '../Chats/ChatHeader'
import AppBar from '../Item/AppBar'

const Header = () => {
    return (
        <AppBar>
            <Container>
                <ChatHeader />
            </Container>
        </AppBar>
    )
}

export default Header