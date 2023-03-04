import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Outlet, useOutletContext } from 'react-router-dom';
import Row from '../components/Item/Row';
import Sidebar from '../components/sidebar/Sidebar';
import { getLoginUser, getOnlineUsers } from '../store/actions/userActions';

const Index = (props) => {
    const { getLoginUserRequest, getOnlineUsersRequest } = props;
    const connection = useOutletContext();
    useEffect(() => {
        getLoginUserRequest();
        connection.start();
        connection.on('GetClients', users => {
            console.log(users)
            getOnlineUsersRequest(users);
        });
    }, [getLoginUserRequest, getOnlineUsersRequest])
    return (
        <Row container>
            <Grid item xs={.5}>
                <Sidebar context={props.context} />
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
        getOnlineUsersRequest: (users) => {
            dispatch(getOnlineUsers(users))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);