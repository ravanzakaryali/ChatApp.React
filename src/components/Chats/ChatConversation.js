import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMessages } from '../../store/actions/chatAction'
import Scroll from '../Item/Scroll'
import ConversationMessage from './ConversationMessage'

const ChatConversation = (props) => {
    const { username } = useParams();
    const { messages, user, getMessagesRequest } = props;
    const { id } = user?.data;

    useEffect(() => {
        getMessagesRequest(username)
    }, [getMessagesRequest, username])

    return (
        <Scroll height="150px">
            {messages?.data.map((message, index) => {
                return (
                    <ConversationMessage
                        key={index}
                        position={id === message?.sendUser?.id ? "start" : "end"}
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
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMessagesRequest: (username) => {
            dispatch(getMessages(username))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatConversation)