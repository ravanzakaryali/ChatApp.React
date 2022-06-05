import React from 'react'
import { Avatar } from '@mui/material'
import { BrokenImage } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Dot from '../Item/Dot'
import Row from '../Item/Row'
import { Grid } from '@mui/material'


const ChatAvatar = ({ fullname, avatar }) => {
    return (
        <Row sx={{
            alignItems: 'center',
            width: "100%"
        }}>
            <Grid item xs={2}>
                <Avatar
                    alt={fullname}
                    src={avatar ? avatar : BrokenImage.toString()}
                    sx={{ width: 42, height: 42 }}
                />
            </Grid>
            <Typography  >
                {fullname}
            </Typography>
            <Dot sx={{
                margin: "0px 20px"
            }} />
        </Row>
    )
}

export default ChatAvatar