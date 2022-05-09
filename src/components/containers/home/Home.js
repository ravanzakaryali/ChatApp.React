import React, { useContext } from 'react'
import { useOutletContext } from 'react-router-dom';
import Chat from '../chat/Chat';

const Home = () => {
    const context = useOutletContext();
    return (
        <>
            <Chat connection={context} />
        </>
    )
}

export default Home;