import React from 'react'
import { Avatar } from '@mui/material'
import { BrokenImage } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Dot from '../Item/Dot'
import Row from '../Item/Row'
import { Grid } from '@mui/material'
const user = {
    name: "Revan Zakaryali",
    url: "https://picsum.photos/200/300",
}
const ChatAvatar = () => {
    return (
        <Row sx={{
            alignItems: 'center',
            width: "100%"
        }}>
            <Grid item xs={2}>
                <Avatar
                    alt={user.name}
                    src={user.url ? user.url : BrokenImage.toString()}
                    sx={{ width: 42, height: 42 }}
                />
            </Grid>
            <Typography  >
                {user.name}
            </Typography>
            <Dot sx={{
                margin: "0px 20px"
            }} />
        </Row>
    )
}

export default ChatAvatar