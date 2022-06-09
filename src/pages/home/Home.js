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
import ChatUsersSidebar from '../../components/Chats/ChatUsersSidebar';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../styles/theme';

const Home = (props) => {
    return (
        <>
            <Grid item ba xs={3}
                sx={{
                    backgroundColor: "background.default",
                    borderRight: `1px solid ${grey[400]}`,
                    borderLeft: `1px solid ${grey[400]}`,
                }}
            >
                <ChatUsersSidebar />
            </Grid>
            <Grid item xs={8.5} >
                <Outlet context={useOutletContext()} />
            </Grid>
        </>
    )
}

export default Home;