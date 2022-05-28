import styled from '@emotion/styled'
import { Grid } from '@mui/material'


const Message = styled.div(
    {
        padding: "5px 10px",
        backgroundColor: 'purple',
        color: "white",
        borderRadius: '10px 10px 10px 0px'
    },
    props => ({
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        color: props.color
    })
)

export default Message;