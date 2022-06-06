import { Container } from '@mui/system'
import React from 'react'
import AvatarCarousel from '../Avatar/AvatarCarousel'
import Row from '../Item/Row'
import SearchAppBar from '../Title/Search'
import SidebarTitle from '../Title/SidebarTitle'

const ChatsSidebar = () => {
    return (
        <Container>
            <Row>
                <SidebarTitle title="Chats" />
                <SearchAppBar />
            </Row>
            <AvatarCarousel />
        </Container>
    )
}

export default ChatsSidebar