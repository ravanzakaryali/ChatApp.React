import React, { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import Chat from '../chat/Chat';
import Messages from '../chat/Messages';
import Event from '../chat/Event';
import Connection from '../chat/Connection';
import Sidebar from '../../sidebar/Sidebar';

const Home = () => {
    const context = useOutletContext();
    return (
        <>
            <Sidebar />
            <Connection connection={context} />
            <Event connection={context} />
            <Chat connection={context} />
            <Messages connection={context} />
        </>
    )
}

export default Home;