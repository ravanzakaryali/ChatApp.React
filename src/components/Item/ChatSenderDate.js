import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';

const ChatSenderDate = styled('span')(({ theme }) => ({
    display: 'flex',
    color: grey[200],
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'end'
}))


export default ChatSenderDate;