import { BrokenImage } from '@mui/icons-material';
import { Avatar, AvatarGroup, Badge, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import Row from '../Item/Row';
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

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

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));



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
                                <StyledBadge
                                    overlap='circular'
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                                    variant='dot'
                                >
                                    <Avatar

                                        alt={user.name}
                                        src={user.url ? user.url : BrokenImage.toString()}
                                        sx={{ width: 42, height: 42 }}
                                    />
                                </StyledBadge>
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