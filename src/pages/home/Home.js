import React, { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import Chat from '../../components/containers/chat/Chat';
import Messages from '../../components/containers/chat/Messages';
import Event from '../../components/containers/chat/Event';
import Connection from '../../components/containers/chat/Connection';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
    const context = useOutletContext();
    return (
        <>
            <Sidebar />
            {/* <Connection connection={context} />
            <Event connection={context} />
            <Chat connection={context} />
            <Messages connection={context} /> */}
        </>
    )
}

export default Home;