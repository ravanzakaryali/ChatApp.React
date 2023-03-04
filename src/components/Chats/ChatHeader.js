import React from 'react'
import Row from '../Item/Row'
import ChatAvatar from './ChatAvatar'
import { Grid, ListItem } from '@mui/material'
import LinkFlex from '../Item/LinkFlex'
import ChatNavButton from '../Item/ChatNavButton'
import { BiSearch } from 'react-icons/bi'
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { RiUser2Line } from 'react-icons/ri'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { connect } from 'react-redux'
const buttons = [
    {
        link: "/",
        icon: <BiSearch />,
    },
    {
        link: "/",
        icon: <IoCallOutline />,
    },
    {
        link: "/",
        icon: <AiOutlineVideoCamera />,
    },
    {
        link: "/",
        icon: <RiUser2Line />,
    },
    {
        link: "/",
        icon: <HiOutlineDotsHorizontal />,
    },
]

const ChatHeader = (props) => {
    const { user } = props;
    const { name, surname, avatar } = user?.data;
    return (
        <Row>
            <Grid item xs={4}>
                <ChatAvatar avatar={avatar} fullname={`${name} ${surname}`} />
            </Grid>
            <Grid item xs={8} sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
            }}>
                <nav>
                    <Row sx={{
                        width: '100%',
                        justifyContent: "end"
                    }}>
                        {
                            buttons.map((button, index) => (
                                <LinkFlex
                                    style={{
                                        margin: "0px 5px",
                                    }}
                                    key={index}
                                    to={button.link}
                                >
                                    <ChatNavButton
                                        sx={{
                                            fontSize: "20px !important",
                                            color: "text.primary",
                                            padding: 0,
                                            justifyContent: "center",
                                        }}>
                                        {button.icon}
                                    </ChatNavButton>
                                </LinkFlex>
                            ))
                        }
                    </Row>
                </nav>
            </Grid>
        </Row>
    )
}


const mapStateToProps = (state) => {
    return {
        user: state.getUserReducer,
    };
};
export default connect(mapStateToProps)(ChatHeader);