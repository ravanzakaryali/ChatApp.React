import React, { useEffect, useState } from 'react'

const Connection = (props) => {
    const connection = props.connection;
    const [connectionId, setConnectionId] = useState();
    useEffect(() => (
        connection.on('GetConnectionId', connecId => {
            setConnectionId(connecId);
        })
    ), [])
    return (
        <div style={{
            fontSize: '18px',
            backgroundColor: 'yellow'
        }}>
            {connectionId}
        </div>
    )
}

export default Connection