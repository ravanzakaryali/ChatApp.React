import React from 'react'
import ChatNavButton from '../Item/ChatNavButton'
import Row from '../Item/Row'
import { GrEmoji } from 'react-icons/gr';
import { RiAttachmentLine } from 'react-icons/ri';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

const messageButtons = [
    {
        icon: <GrEmoji />,
    },
    {
        icon: <RiAttachmentLine />,
    },
    {
        icon: <MdPhotoSizeSelectActual />,
    },
]
const SendMessageIcons = () => {
    return (
        <Row sx={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            fontSize: '20px',
        }}>
            {
                messageButtons.map((button, index) => (
                    <ChatNavButton key={index}>
                        {button.icon}
                    </ChatNavButton>
                ))
            }
        </Row>
    )
}

export default SendMessageIcons