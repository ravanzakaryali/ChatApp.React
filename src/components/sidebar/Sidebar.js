import VerticalItem from '../Item/VerticalItem';
import { RiUser3Line } from 'react-icons/ri'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { DiSenchatouch } from 'react-icons/di'
import { AiOutlineSetting } from 'react-icons/ai'
import { MdLanguage } from 'react-icons/md'
import { HiOutlineMoon } from 'react-icons/hi'
import React from 'react'
import { Avatar, ListItemButton } from '@mui/material'
import VerticalList from '../Item/VerticalList';
import Nav from '../Item/Nav';
import LinkFlex from '../Item/LinkFlex';
import { connect } from 'react-redux';
import { BrokenImage } from '@mui/icons-material';

const Sidebar = (props) => {
    const { avatar, name, surname } = props?.user?.data;
    return (
        <VerticalList>
            <VerticalItem>
                <ListItemButton>
                    <LinkFlex to="/">
                        <DiSenchatouch />
                    </LinkFlex>
                </ListItemButton>
            </VerticalItem>
            <VerticalItem sx={{ margin: "auto" }}>
                <Nav >
                    <ListItemButton>
                        <LinkFlex to="/">
                            <IoChatbubbleEllipsesOutline />
                        </LinkFlex>
                    </ListItemButton>
                    <ListItemButton>
                        <LinkFlex to="/">
                            <RiUser3Line />
                        </LinkFlex>
                    </ListItemButton>
                    <ListItemButton>
                        <LinkFlex to="settings">
                            <AiOutlineSetting />
                        </LinkFlex>
                    </ListItemButton>
                </Nav>
            </VerticalItem>
            <VerticalItem>
                <Nav orientation='vertical' >
                    <ListItemButton>
                        <LinkFlex to="/">
                            <MdLanguage />
                        </LinkFlex>
                    </ListItemButton>
                    <ListItemButton>
                        <LinkFlex to="/">
                            <HiOutlineMoon />
                        </LinkFlex>
                    </ListItemButton>
                    <ListItemButton>
                        <Avatar

                            alt={`${name} ${surname}`}
                            src={avatar ? avatar : BrokenImage.toString()}
                            sx={{ width: 42, height: 42 }}
                        />
                    </ListItemButton>
                </Nav>
            </VerticalItem>
        </VerticalList>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.getLoginUserReducer,
    };
};
export default connect(mapStateToProps)(Sidebar);