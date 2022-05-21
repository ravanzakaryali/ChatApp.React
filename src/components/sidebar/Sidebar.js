import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RiContactsLine, RiUser3Line } from 'react-icons/ri'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import { DiSenchatouch } from 'react-icons/di'
import { AiOutlineSetting } from 'react-icons/ai'
import { MdLanguage } from 'react-icons/md'
import { HiOutlineMoon } from 'react-icons/hi'
import React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'

const Sidebar = () => {
    return (
        <List sx={{
            maxWidth: "75px",
            display: "flex",
            height: "100vh",
            flexDirection: 'column'
        }}>
            <ListItem sx={{
                flexDirection: "column",
                margin: 'auto'
            }}>
                <ListItemButton >
                    <ListItemIcon>
                        <DiSenchatouch />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{
                flexDirection: "column",
            }}>
                <ListItemButton>
                    <ListItemIcon>
                        <RiUser3Line />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <IoChatbubbleEllipsesOutline />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <AiOutlineSetting />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
            <ListItem sx={{
                flexDirection: "column",
            }}>
                <ListItemButton>
                    <ListItemIcon>
                        <MdLanguage />
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <HiOutlineMoon />
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default Sidebar