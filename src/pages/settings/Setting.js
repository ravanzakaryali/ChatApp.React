import React from 'react'
import { Grid } from '@mui/material';
import ChatUsersSidebar from '../../components/Chats/ChatUsersSidebar';
import { Outlet, useOutletContext } from 'react-router-dom';
import SidebarTitle from '../../components/Title/SidebarTitle'
import { Container } from '@mui/system';
import SettingHeader from './SettingHeader';


const Setting = () => {
    return (
        <>
            <Grid item xs={3}>
                <Container>
                    <SidebarTitle title="Settings" />
                    <SettingHeader />
                </Container>
            </Grid>
            <Grid item xs={8.5}>
                <Outlet context={useOutletContext()} />
            </Grid>
        </>
    )
}

export default Setting