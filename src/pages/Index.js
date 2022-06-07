import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Outlet, useOutletContext } from 'react-router-dom';
import Row from '../components/Item/Row';
import Sidebar from '../components/sidebar/Sidebar';
import { getLoginUser } from '../store/actions/userActions';

const Index = (porps) => {
    const { getLoginUserRequest, user } = porps;
    const connection = useOutletContext();
    useEffect(() => {
        connection.start()
            .then(() => {
                connection.on('GetClients', users => {
                    getLoginUserRequest(users);
                })
            });
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
        getLoginUserRequest: () => {
            dispatch(getLoginUser())
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);