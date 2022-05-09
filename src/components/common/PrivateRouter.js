import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const [connection, setConnection] = useState(null)
    useEffect(() => {
        const server = 'https://localhost:5001/chathub'
        const newConnection = new HubConnectionBuilder()
            .withUrl(server)
            .withAutomaticReconnect([1000, 2000, 3000])
            .configureLogging(LogLevel.Information)
            .build();

        setConnection(newConnection);
    }, []);

    return (
        connection ?
            <Outlet context={connection} />
            : ""
    )
}

export default PrivateRouter