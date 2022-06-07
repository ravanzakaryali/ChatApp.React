import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRouter = () => {
    var navigate = useNavigate();
    const [connection, setConnection] = useState(null)
    useEffect(() => {
        if (!localStorage.getItem("token") &&
            !localStorage.getItem("ex_d") &&
            !localStorage.getItem("rf_tk")) {
            return navigate("/auth/login");
        };
        const server = 'https://localhost:5001/chathub'
        const newConnection = new HubConnectionBuilder()
            .withUrl(server, {
                logging: LogLevel.Trace,
                accessTokenFactory: () => localStorage.getItem("token")
            })
            .withAutomaticReconnect([1000, 2000, 3000])
            .configureLogging(LogLevel.Information)
            .build();

        setConnection(newConnection);
    }, [navigate]);
    return (
        connection ?
            <Outlet context={connection} />
            : ""
    )
}

export default PrivateRouter