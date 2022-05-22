import VerticalItem from '../Item/VerticalItem';
import { RiUser3Line } from 'react-icons/ri'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { DiSenchatouch } from 'react-icons/di'
import { AiOutlineSetting } from 'react-icons/ai'
import { MdLanguage } from 'react-icons/md'
import { HiOutlineMoon } from 'react-icons/hi'
import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import Row from '../Item/Row'
import VerticalList from '../Item/VerticalList';
import Nav from '../Item/Nav';
import { Link } from 'react-router-dom';
import LinkFlex from '../Item/LinkFlex';
import { createStyled } from '@mui/system';

const Sidebar = () => {
    return (
        <VerticalList>
            <VerticalItem>
                <ListItemButton>
                    <LinkFlex to="/">
                        <RiUser3Line />
                    </LinkFlex>
                </ListItemButton>
            </VerticalItem>
            <VerticalItem sx={{ margin: "auto" }}>
                <Nav orientation='vertical' >
                    <ListItemButton>
                        <LinkFlex to="/">
                            <IoChatbubbleEllipsesOutline />
                        </LinkFlex>
                    </ListItemButton>
                    <ListItemButton>
                        <LinkFlex to="/">
                            <DiSenchatouch />
                        </LinkFlex>
                    </ListItemButton>
                    <ListItemButton>
                        <LinkFlex to="/">
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
                </Nav>
            </VerticalItem>
        </VerticalList>
    )
}

export default Sidebar