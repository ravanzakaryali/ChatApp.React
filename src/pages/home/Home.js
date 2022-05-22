import React, { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import Chat from '../../components/containers/chat/Chat';
import Messages from '../../components/containers/chat/Messages';
import Event from '../../components/containers/chat/Event';
import Connection from '../../components/containers/chat/Connection';
import Sidebar from '../../components/sidebar/Sidebar';
import Row from '../../components/Item/Row';
import Col from '../../components/Item/Col';
import { Grid } from '@mui/material';
import ChatsSidebar from '../../components/Chats/ChatsSidebar';

const Home = () => {
    const context = useOutletContext();
    return (
        <Row container>
            <Grid item xs={.5}>
                <Sidebar />
            </Grid>
            <Grid item xs={3}>
                <ChatsSidebar />
            </Grid>
            <Grid item xs={8.5}>
                <div style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: 'blue'
                }}>
                </div>
            </Grid>
            {/* <Connection connection={context} />
            <Event connection={context} />
            <Chat connection={context} />
            <Messages connection={context} /> */}
        </Row>
    )
}

export default Home;