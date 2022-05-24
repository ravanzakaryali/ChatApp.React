import { BrokenImage } from '@mui/icons-material';
import { Avatar, AvatarGroup, Badge, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import Row from '../Item/Row';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import StyledBadge from './StyledBadge';
import AvatarOnline from './AvatarOnline';

const data = [
    {
        name: "Revan",
        url: null,
    },
    {
        name: "Mamed",
        url: "https://picsum.photos/200/301"
    },
    {
        name: "Zaur",
        url: "https://picsum.photos/199/300"
    },
    {
        name: "Ceyvid",
        url: "https://picsum.photos/201/300"
    },
    {
        name: "JeyJey",
        url: "https://picsum.photos/201/301"
    },
    {
        name: "Mammad",
        url: "https://picsum.photos/200/301"
    },
    {
        name: "Zaur",
        url: "https://picsum.photos/199/300"
    },
    {
        name: "Ceyvid",
        url: "https://picsum.photos/201/300"
    },
    {
        name: "JeyJey",
        url: null
    }
]


const AvatarCarousel = () => {

    return (
        <Row sx={{
            margin: "20px 0px",
        }}>
            <Swiper
                slidesPerView={4.2}
                pagination={{
                    clickable: true,
                }}
            >
                {
                    data?.map((user, index) => (
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
                                    {user.name}
                                </Typography>
                            </Paper>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Row>
    )
}

export default AvatarCarousel