import { BrokenImage } from '@mui/icons-material';
import { Avatar, AvatarGroup, Badge, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
import Row from '../Item/Row';
const data = [
    {
        name: "Revan",
        url: null,
    },
    {
        name: "MammadMammadMammad",
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
            margin: "20px 0px"
        }}>
            {
                data?.map((user, index) => (
                    <Paper
                        key={index}
                        elevation={3} sx={{
                            padding: 1,
                            margin: "0px 4px",
                            width: 80,
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
                ))
            }
        </Row >
    )
}

export default AvatarCarousel