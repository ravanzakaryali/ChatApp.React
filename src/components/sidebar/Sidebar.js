import VerticalItem from '../Item/VerticalItem';
import { RiUser3Line } from 'react-icons/ri'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { DiSenchatouch } from 'react-icons/di'
import { AiOutlineSetting } from 'react-icons/ai'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import React from 'react'
import { Avatar, ListItemButton } from '@mui/material'
import VerticalList from '../Item/VerticalList';
import Nav from '../Item/Nav';
import LinkFlex from '../Item/LinkFlex';
import { connect } from 'react-redux';
import { BrokenImage } from '@mui/icons-material';
import { theme } from '../../styles/theme';

const sideBarNav = [
    {
        link: "/",
        icon: <IoChatbubbleEllipsesOutline />,
    },
    {
        link: "settings",
        icon: <AiOutlineSetting />,
    },
]


const Sidebar = (props) => {
    const { avatar, name, surname } = props?.user?.data;
    return (
        <VerticalList>
            <VerticalItem>
                <LinkFlex to="/">
                    <ListItemButton sx={{
                        color: 'text.primary',
                    }}>
                        <DiSenchatouch />
                    </ListItemButton>
                </LinkFlex>
            </VerticalItem>
            <VerticalItem sx={{ margin: "auto" }}>
                <Nav >
                    {
                        sideBarNav.map((button, index) => (
                            <LinkFlex to={button.link} key={index}>
                                <ListItemButton sx={{
                                    color: 'text.primary',
                                }}>
                                    {button.icon}
                                </ListItemButton>
                            </LinkFlex>
                        ))
                    }
                </Nav>
            </VerticalItem>
            <VerticalItem>
                <Nav orientation='vertical' >
                    <ListItemButton sx={{
                        justifyContent: 'center',
                        color: 'text.primary',
                    }}
                        onClick={() => {
                            theme.palette.mode = 'light';
                        }}
                    >
                        {theme.palette.mode === 'dark' ? <HiOutlineMoon /> : <HiOutlineSun />}
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