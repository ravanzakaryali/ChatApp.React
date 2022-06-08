import { Paper, Typography } from '@mui/material';
import React from 'react'
import Row from '../Item/Row';
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import AvatarOnline from './AvatarOnline';
import { connect } from 'react-redux';
import { grey } from "@mui/material/colors";

const AvatarCarousel = (props) => {
    const { users } = props;
    return (
        <Row sx={{
            margin: "20px 0px",
        }}>
            <Swiper
                spaceBetween={20}
                style={{
                    padding: "10px",
                }}
                slidesPerView={users.data.length > 4 ? 4 : users.data.length}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    users.data?.map((user, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                margin: "0px",
                            }}
                        >
                            <Paper
                                elevation={3} sx={{
                                    padding: "5px",
                                    width: 70,
                                    display: 'flex',
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    borderRadius: "10px",
                                    backgroundColor: grey[100],
                                    boxShadow: `0 2px 4px ${grey[400]}`,
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

export default connect(mapStateToProps)(AvatarCarousel);