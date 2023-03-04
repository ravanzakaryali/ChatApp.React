import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useOutletContext, useParams } from 'react-router-dom'
import { getMessages, socketMessage } from '../../store/actions/chatAction'
import Scroll from '../Item/Scroll'
import ConversationMessage from './ConversationMessage'

const ChatConversation = (props) => {
    const connection = useOutletContext();
    const { username } = useParams();

    const { messages,
        user,
        getMessagesRequest,
        sendSocketMessage,
        getSocket
    } = props;

    const { id } = user?.data;
    if (getSocket?.data?.length !== 0) {
        messages?.data?.push(getSocket?.data);
    };
    getSocket.data = "";
    useEffect(() => {
        getMessagesRequest(username)
        connection.on('ReceiveMessage', message => {
            sendSocketMessage(message);
            console.log(message);
        })
    }, [username])
    return (
        <Scroll height="150px">
            {messages.data?.map((message, index) => {
                return (
                    <ConversationMessage
                        key={index}
                        position={id === message?.sendUser?.id ? "end" : "start"}
                        user={user?.data}
                        message={message}
                    />
                )
            })}
        </Scroll>
    )
}

const mapStateToProps = (state) => {
    return {
        messages: state.getMessagesReducer,
        user: state.getUserReducer,
        getSocket: state.socketMessageReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMessagesRequest: (username) => {
            dispatch(getMessages(username))
        },
        sendSocketMessage: (content) => {
            dispatch(socketMessage(content))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatConversation)