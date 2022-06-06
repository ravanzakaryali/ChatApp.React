import { BrokenImage } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import Row from '../../components/Item/Row'

const SettingHeader = (props) => {
    const { user } = props;
    console.log(user);
    return (
        <Row sx={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Avatar
                alt={user?.name}
                src={user?.url ? user.url : BrokenImage.toString()}
                sx={{ width: 42, height: 42 }}
            />
        </Row>
    )
}


const mapStateToProps = (state) => {
    return {
        user: state.getLoginUserReducer,
    };
};
export default connect(mapStateToProps)(SettingHeader);
