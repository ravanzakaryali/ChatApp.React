import styled from '@emotion/styled';

const MessageList = styled.li(
    {
        display: 'flex',
        width: 'auto',
    },
    props => ({
        justifyContent: props.justifyContent
    })


)

export default MessageList;