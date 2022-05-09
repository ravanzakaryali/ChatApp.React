import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const [connection, setConnection] = useState({})
    const server = 'https://localhost:5001/chathub'
    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl(server)
            .configureLogging(LogLevel.Information)
            .build();
        newConnection.start();
        setConnection(newConnection);
    }, []);

    return <Outlet context={connection} />
}

export default PrivateRouter