import React, { useContext, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom';
import Chat from '../chat/Chat';
import Messages from '../chat/Messages';

const Home = () => {
    const context = useOutletContext();
    return (
        <>
            <Chat connection={context} />
            <Messages connection={context} />
        </>
    )
}

export default Home;