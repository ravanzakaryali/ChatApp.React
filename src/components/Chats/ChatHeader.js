import React from 'react'
import Row from '../Item/Row'
import ChatAvatar from './ChatAvatar'
import { grey } from '@mui/material/colors'

const ChatHeader = () => {
    return (
        <Row sx={{
            padding: "20px 0px",
            borderBottom: `1px solid ${grey[300]}`
        }}>
            <ChatAvatar />
        </Row>
    )
}

export default ChatHeader