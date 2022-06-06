import { Avatar } from '@mui/material'
import React from 'react'
import Row from '../../components/Item/Row'

const SettingHeader = () => {
    return (
        <Row sx={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Avatar
                alt={user?.name}
                src={user?.url ? user.url : BrokenImage.toString()}
                sx={{ width: 42, height: 42 }}
            />
        </Row>
    )
}

export default SettingHeader