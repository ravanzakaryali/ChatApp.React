import { BrokenImage } from '@mui/icons-material'
import { Avatar, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import Row from '../../components/Item/Row'

const SettingHeader = (props) => {
    const { name, surname, avatar } = props?.user?.data;
    return (
        <Row sx={{
            paddingBottom: '2rem',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <List sx={{
                textAlign: 'center',
            }}>
                <ListItem sx={{
                    justifyContent: 'center',
                }}>
                    <Avatar
                        alt={name}
                        src={avatar ? avatar : BrokenImage.toString()}
                        sx={{ width: 84, height: 84 }}
                    />
                </ListItem>
                <ListItem sx={{
                    paddingTop: 0,
                }}>
                    <Typography
                        sx={{
                            fontSize: '1.1rem',
                            fontWeight: '400',
                        }}>
                        {name} {surname}
                    </Typography>
                </ListItem>
            </List>
        </Row>
    )
}


const mapStateToProps = (state) => {
    return {
        user: state.getLoginUserReducer,
    };
};
export default connect(mapStateToProps)(SettingHeader);
