import { TextFields } from '@mui/icons-material'
import { Button, InputBase } from '@mui/material'
import React from 'react'
import Row from '../Item/Row'
import SendMessageIcons from './SendMessageIcons'
import { IoSend } from 'react-icons/io5';
import Col from '../Item/Col';
const SendMessage = () => {
    return (
        <Row sx={{
            padding: "5px 20px"
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
                <Row width="100%">
                    <Col item xs={8}>
                        <InputBase
                            name='sendmessage'
                            fullWidth
                            sx={{
                                width: '100%',
                                ml: 1,
                                flex: 1,
                                border: 'solid 1px gray',
                                padding: "7px 15px",
                                borderRadius: "10px",
                            }}
                            inputProps={{ 'placeholder': 'Enter your message....' }}
                        />
                    </Col>
                    <Col item xs={3}>
                        <SendMessageIcons />
                    </Col>
                    <Col item xs={1} sx={{
                        justifyContent: 'end',
                    }}>
                        <Button variant="contained" sx={{
                            height: '100%',
                            width: '100%',
                        }}>
                            <IoSend />
                        </Button>
                    </Col>
                    {/* <SendButton/> */}
                </Row>
            </form>
        </Row>
    )
}

export default SendMessage;