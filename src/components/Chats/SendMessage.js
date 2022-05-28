import { TextFields } from '@mui/icons-material'
import { InputBase } from '@mui/material'
import React from 'react'
import Row from '../Item/Row'
import SendMessageIcons from './SendMessageIcons'

const SendMessage = () => {
    return (
        <Row sx={{
            padding: "5px 0px"
        }}>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target.sendmessage.value);
                e.target.reset();
            }}
                style={{
                    display: 'flex',
                    width: '100%'
                }}
            >
                <InputBase
                    name='sendmessage'
                    fullWidth
                    sx={{
                        width: '100%',
                        ml: 1,
                        flex: 1,
                        border: 'solid 1px gray',
                        padding: "8px 15px",
                        borderRadius: "10px",
                    }}
                    inputProps={{ 'placeholder': 'Enter your message....' }}
                />
                <SendMessageIcons />
                <button type='submit'>
                    Send
                </button>
                {/* <SendButton/> */}
            </form>
        </Row>
    )
}

export default SendMessage;