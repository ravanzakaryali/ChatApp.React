import { Grid } from '@mui/material';
import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';
import Row from '../components/Item/Row';
import Sidebar from '../components/sidebar/Sidebar';

const Index = () => {
    return (
        <Row container>
            <Grid item xs={.5}>
                <Sidebar />
            </Grid>
            <Outlet context={useOutletContext()} />
        </Row>
    )
}

export default Index;