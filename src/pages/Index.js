import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Outlet, useOutletContext } from 'react-router-dom';
import Row from '../components/Item/Row';
import Sidebar from '../components/sidebar/Sidebar';

const Index = (porps) => {
    const { getLoginUserRequest, user } = porps;
    useEffect(() => {
        getLoginUserRequest();
    }, [])
    return (
        <Row container>
            <Grid item xs={.5}>
                <Sidebar />
            </Grid>
            <Outlet context={useOutletContext()} />
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.getLoginUserReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getLoginUserRequest: (data) => {
            dispatch();
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);