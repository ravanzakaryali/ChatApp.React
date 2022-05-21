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

const Sidebar = () => {
    return (
        <VerticalList>
            <VerticalItem>
                <ListItemButton>
                    <RiUser3Line />
                </ListItemButton>
            </VerticalItem>
            <VerticalItem sx={{ margin: "auto" }}>
                <Nav orientation='vertical' >
                    <ListItemButton>
                        <IoChatbubbleEllipsesOutline />
                    </ListItemButton>
                    <ListItemButton>
                        <DiSenchatouch />
                    </ListItemButton>
                    <ListItemButton>
                        <AiOutlineSetting />
                    </ListItemButton>
                </Nav>
            </VerticalItem>
            <VerticalItem>
                <Nav orientation='vertical' >
                    <ListItemButton>
                        <MdLanguage />
                    </ListItemButton>
                    <ListItemButton>
                        <HiOutlineMoon />
                    </ListItemButton>
                </Nav>
            </VerticalItem>
        </VerticalList>
    )
}

export default Sidebar