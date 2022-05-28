import { TextFields } from '@mui/icons-material'
import { InputBase } from '@mui/material'
import React from 'react'
import Row from '../Item/Row'

const SendMessage = () => {
    return (
        <Row sx={{
            padding: "5px 0px"
        }}>
            <InputBase
                sx={{
                    ml: 1,
                    flex: 1,
                    border: 'solid 1px gray',
                    padding: "8px 15px",
                    borderRadius: "10px",
                }}
                inputProps={{ 'placeholder': 'Enter your message....' }}
            />
            {/* <SendMessageIcons /> */}
            {/* <SendButton/> */}
        </Row>
    )
}

export default SendMessage