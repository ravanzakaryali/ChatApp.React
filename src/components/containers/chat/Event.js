import React, { useEffect, useState } from 'react';

const Event = (props) => {
    const connection = props.connection;
    const [event, setEvent] = useState(null);
    const [eventStyle, setEventStyle] = useState({
        display: 'none',
    });
    useEffect(() => {
        connection.onreconnecting((error) => {
            setEvent('Reconnecting loading...');
            setEventStyle({
                display: 'block',
                color: 'black',
                backgroundColor: 'yellow'
            })
        });
        connection.onreconnected((connectionId) => {
            setEventStyle({
                display: 'block',
                color: 'black',
                backgroundColor: 'green',
                fontSize: "20px",
                padding: "0px",
                margin: "10px"
            })
            setEvent('Reconnect :)');
        });
        connection.onclose((connectionId) => {
            setEventStyle({
                display: 'block',
                color: 'black',
                backgroundColor: 'red'
            })
            setEvent("There is a problem :(")
        });
    }, []);
    return <h6 style={eventStyle}>{event}</h6>;
};

export default Event;
