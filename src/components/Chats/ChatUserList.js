import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Scroll from '../Item/Scroll'
import ChatUser from './ChatUser'
import { getUsers } from '../../store/actions/userActions'

const data = [
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301",
        message: "Salam"
    },
    {
        name: "Farid",
        url: "https://picsum.photos/200/300",
        message: "Hello"
    }
]

const ChatUserList = (props) => {
    const { users, getUsersRequest } = props;
    useEffect(() => {
        getUsersRequest();
    }, [getUsersRequest])

    return (
        <Scroll height="250px">
            {
                users?.data.map((user, index) => (
                    <ChatUser key={index} user={user} />
                ))
            }
        </Scroll>
    )
}


const mapStateToProps = (state) => {
    return {
        users: state.getUsersReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUsersRequest: (data) => {
            dispatch(getUsers(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatUserList);