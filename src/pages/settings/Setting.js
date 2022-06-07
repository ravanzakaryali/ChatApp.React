import React from 'react'
import { Grid } from '@mui/material';
import ChatUsersSidebar from '../../components/Chats/ChatUsersSidebar';
import { Outlet, useOutletContext } from 'react-router-dom';
import SidebarTitle from '../../components/Title/SidebarTitle'
import { Container } from '@mui/system';
import SettingHeader from './SettingHeader';
import SettingAcardion from './SettingAcardion';
import Scroll from '../../components/Item/Scroll';


const Setting = () => {
    return (
        <>
            <Grid item xs={3} sx={{
                backgroundColor: '#fafafa',
            }}>
                <Container>
                    <SidebarTitle title="Settings" />
                    <SettingHeader />
                    <Scroll height="260px">
                        <SettingAcardion />
                    </Scroll>
                </Container>
            </Grid>
            <Grid item xs={8.5}>
                <Outlet context={useOutletContext()} />
            </Grid>
        </>
    )
}

export default Setting