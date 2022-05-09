import React, { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import Chat from '../chat/Chat';
import Messages from '../chat/Messages';
import Event from '../chat/Event';

const Home = () => {
    const context = useOutletContext();
    return (
        <>
            <Event connection={context} />
            <Chat connection={context} />
            <Messages connection={context} />
        </>
    )
}

export default Home;