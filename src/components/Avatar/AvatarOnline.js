import { BrokenImage } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import StyledBadge from './StyledBadge'

const AvatarOnline = ({ user }) => {
    return (
        <StyledBadge
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            variant='dot'
        >
            <Avatar

                alt={user?.name}
                src={user?.url ? user.url : BrokenImage.toString()}
                sx={{ width: 42, height: 42 }}
            />
        </StyledBadge>
    )
}

export default AvatarOnline