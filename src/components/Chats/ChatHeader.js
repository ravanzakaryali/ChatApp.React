import React from 'react'
import Row from '../Item/Row'
import ChatAvatar from './ChatAvatar'
import { grey } from '@mui/material/colors'
import { Grid } from '@mui/material'

const ChatHeader = () => {
    return (
        <Row>
            <Grid item xs={4}>
                <ChatAvatar />
            </Grid>
        </Row>
    )
}

export default ChatHeader