import { ImportContacts } from '@mui/icons-material'
import React from 'react'
import ChatNavButton from '../Item/ChatNavButton'
import Row from '../Item/Row'

const SendMessageIcons = () => {
    return (
        <Row>
            <ChatNavButton>
                <ImportContacts />
            </ChatNavButton>
            <ChatNavButton>
                <ImportContacts />
            </ChatNavButton>
            <ChatNavButton>
                <ImportContacts />
            </ChatNavButton>
            <ChatNavButton>
                <ImportContacts />
            </ChatNavButton>
        </Row>
    )
}

export default SendMessageIcons