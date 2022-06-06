import React, { useContext, useEffect } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';
import Chat from '../../components/containers/chat/Chat';
import Messages from '../../components/containers/chat/Messages';
import Event from '../../components/containers/chat/Event';
import Connection from '../../components/containers/chat/Connection';
import Sidebar from '../../components/sidebar/Sidebar';
import Row from '../../components/Item/Row';
import Col from '../../components/Item/Col';
import { Grid } from '@mui/material';
import ChatUser from '../../components/Chats/ChatUser';
import ChatUserList from '../../components/Chats/ChatUserList';
import ChatHeader from '../../components/Chats/ChatHeader';
import Header from '../../components/Header/Header';
import ChatConversation from '../../components/Chats/ChatConversation';
import SendMessage from '../../components/Chats/SendMessage';
import ChatUsersSidebar from '../../components/Chats/ChatUsersSidebar';

const Home = (props) => {
    return (
        <>
            <Grid item xs={3}>
                <ChatUsersSidebar />
            </Grid>
            <Grid item xs={8.5}>
                <Outlet context={useOutletContext()} />
            </Grid>
        </>
    )
}

export default Home;