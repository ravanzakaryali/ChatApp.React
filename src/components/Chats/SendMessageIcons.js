import { ImportContacts } from '@mui/icons-material'
import React from 'react'
import ChatNavButton from '../Item/ChatNavButton'
import Row from '../Item/Row'
import { GrEmoji } from 'react-icons/gr';
import { RiAttachmentLine } from 'react-icons/ri';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

const SendMessageIcons = () => {
    return (
        <Row>
            <ChatNavButton>
                <GrEmoji />
            </ChatNavButton>
            <ChatNavButton>
                <RiAttachmentLine />
            </ChatNavButton>
            <ChatNavButton>
                <MdPhotoSizeSelectActual />
            </ChatNavButton>
        </Row>
    )
}

export default SendMessageIcons