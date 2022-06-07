import { BrokenImage } from '@mui/icons-material';
import { Avatar, AvatarGroup, Badge, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React, { useEffect } from 'react'
import Row from '../Item/Row';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import StyledBadge from './StyledBadge';
import AvatarOnline from './AvatarOnline';
import { getOnlineUsers } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import { useOutletContext } from 'react-router-dom';

const AvatarCarousel = (props) => {
    const { getOnlineUsersRequest, users } = props;
    const connection = useOutletContext();
    useEffect(() => {
        connection.start()
            .then(() => {
                connection.on('GetClients', users => {
                    getOnlineUsersRequest(users);
                })
            });
    }, []);
    console.log(users.data);
    return (
        <Row sx={{
            margin: "20px 0px",
        }}>
            <Swiper
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    users.data?.map((user, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                padding: "5px 0px"
                            }}
                        >
                            <Paper
                                elevation={3} sx={{
                                    padding: "5px 2px",
                                    margin: "0px 4px",
                                    width: 70,
                                    display: 'flex',
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    textAlign: "center"
                                }}>
                                <AvatarOnline user={user} />
                                <Typography sx={{
                                    width: "100%",
                                    paddingTop: .5,
                                    fontSize: "13px",
                                    color: 'grey',
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                }}>
                                    {user.name} {user.surname}
                                </Typography>
                            </Paper>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.getOnlineUsersReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getOnlineUsersRequest: (username) => {
            dispatch(getOnlineUsers(username));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarCarousel);