import styled from '@emotion/styled';
import { deepPurple } from '@mui/material/colors';


const Message = styled.div(
    {
        padding: "5px 10px",
        backgroundColor: deepPurple[500],
        color: "white",
        borderRadius: '10px 10px 10px 0px'
    },
    props => ({
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        color: props.color,
        marginBottom: props.marginBottom
    })
)

export default Message;