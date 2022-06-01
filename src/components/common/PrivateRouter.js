import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjFhMmM0OGNkLWFlOTMtNGI2My05ZWJlLWEyODkxMTg0NmNmYyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJyZXZhbl96YWthcnlhbGk5NTYzMyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InJldmFuemxpQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Ik1lbWJlciIsImV4cCI6MTY2MDA1OTYzNSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NTAwMS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo1MDAxLyJ9.vIs-vs5CXC4YRYvrbSvuUqV4Y7XNN-3zcSphqKY7PK8";
    const [connection, setConnection] = useState(null)
    useEffect(() => {
        const server = 'https://localhost:5001/chathub'
        const newConnection = new HubConnectionBuilder()
            .withUrl(server, {
                logging: LogLevel.Trace,
                accessTokenFactory: () => token
            })
            .withAutomaticReconnect([1000, 2000, 3000])
            .configureLogging(LogLevel.Information)
            .build();
        setConnection(newConnection);
        newConnection.start().catch(err => console.error(err.toString()));
    }, []);
    return (
        connection ?
            <Outlet context={connection} />
            : ""
    )
}

export default PrivateRouter