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

const Sidebar = () => {
    return (
        <VerticalList>
            <VerticalItem>
            </VerticalItem>
            <VerticalItem sx={{ margin: "0 auto" }}>
            </VerticalItem>
            <VerticalItem>
            </VerticalItem>
        </VerticalList>
    )
}

export default Sidebar