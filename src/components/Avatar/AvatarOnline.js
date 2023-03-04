import { BrokenImage } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import StyledBadge from './StyledBadge'

const AvatarOnline = ({ user }) => {
    return (
        <Avatar
            alt={`${user?.name} ${user?.surname}`}
            src={user?.avatar ? user?.avatar : BrokenImage.toString()}
            sx={{ width: 42, height: 42 }}
        />
    )
}

export default AvatarOnline