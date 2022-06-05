import React from 'react'
import Row from '../Item/Row'
import ChatAvatar from './ChatAvatar'
import { Grid } from '@mui/material'
import LinkFlex from '../Item/LinkFlex'
import ChatNavButton from '../Item/ChatNavButton'
import { BiSearch } from 'react-icons/bi'
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { RiUser2Line } from 'react-icons/ri'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { connect } from 'react-redux'

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
                        <ChatNavButton>
                            <LinkFlex to="/">
                                <BiSearch />
                            </LinkFlex>
                        </ChatNavButton>
                        <ChatNavButton>
                            <LinkFlex to="/">
                                <IoCallOutline />
                            </LinkFlex>
                        </ChatNavButton>
                        <ChatNavButton>
                            <LinkFlex to="/">
                                <AiOutlineVideoCamera />
                            </LinkFlex>
                        </ChatNavButton>
                        <ChatNavButton>
                            <LinkFlex to="/">
                                <RiUser2Line />
                            </LinkFlex>
                        </ChatNavButton>
                        <ChatNavButton>
                            <LinkFlex to="/">
                                <HiOutlineDotsHorizontal />
                            </LinkFlex>
                        </ChatNavButton>
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