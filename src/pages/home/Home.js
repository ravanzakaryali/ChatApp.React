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
import ChatsSidebar from '../../components/Chats/ChatsSidebar';
import ChatUser from '../../components/Chats/ChatUser';
import ChatUserList from '../../components/Chats/ChatUserList';
import ChatHeader from '../../components/Chats/ChatHeader';
import Header from '../../components/Header/Header';
import ChatConversation from '../../components/Chats/ChatConversation';
import SendMessage from '../../components/Chats/SendMessage';

const Home = () => {
    const context = useOutletContext();
    return (
        <Row container>
            <Grid item xs={.5}>
                <Sidebar />
            </Grid>
            <Grid item xs={3}>
                <ChatsSidebar />
                <ChatUserList />
            </Grid>
            <Grid item xs={8.5}>
                <Outlet />
            </Grid>
            <Grid>
            </Grid>
            {/* <Connection connection={context} />
            <Event connection={context} />
            <Chat connection={context} />
            <Messages connection={context} /> */}
        </Row>
    )
}

export default Home;