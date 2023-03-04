import { TextFields } from '@mui/icons-material'
import { Button, InputBase } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import Row from '../Item/Row'
import SendMessageIcons from './SendMessageIcons'
import { IoSend } from 'react-icons/io5';
import Col from '../Item/Col';
import { useForm } from 'react-hook-form'
import { sendMessage } from '../../store/actions/chatAction'
import { connect } from 'react-redux'
import { useOutletContext } from 'react-router-dom'
import { deepPurple } from '@mui/material/colors';
const SendMessage = (props) => {
    const connection = useOutletContext();
    const { sendMessageRequest, sendMessagesResult, user } = props;
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        sendMessageRequest({ ...data, sendUserId: user?.data?.id })
        reset();
    };

    return (
        <Row sx={{
            padding: "5px 20px"
        }}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: 'flex',
                    width: '100%'
                }}
            >
                <Row width="100%">
                    <Col item xs={8}>
                        <InputBase
                            {...register("content", { required: true })}
                            name='content'
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
                        <Button
                            type='submit'
                            variant="contained"
                            sx={{
                                height: '100%',
                                width: '100%',
                            }}>
                            <IoSend />
                        </Button>
                    </Col>
                </Row>
            </form>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        sendMessagesResult: state.sendMessageReducer,
        user: state.getUserReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageRequest: (data) => {
            dispatch(sendMessage(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);