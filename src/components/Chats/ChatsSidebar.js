import { Container } from '@mui/system'
import React from 'react'
import AvatarCarousel from '../Avatar/AvatarCarousel'
import SidebarTitle from '../Title/SidebarTitle'

const ChatsSidebar = () => {
    return (
        <Container>
            <SidebarTitle title="Chats" />
            <AvatarCarousel />
        </Container>
    )
}

export default ChatsSidebar