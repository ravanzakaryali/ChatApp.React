import { Avatar, AvatarGroup, Badge } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'
const data = [
    {
        name: "Revan",
        url: "https://picsum.photos/200/300",
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
        url: "https://picsum.photos/201/301"
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
        <AvatarGroup sx={{
            justifyContent: "start",
            padding: "20px 0"
        }} max={7} total={data.length}>{
                data?.map((user, index) => (
                    <StyledBadge
                        key={index}
                        overlap='circular'
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                        variant='dot'
                    >
                        <Avatar
                            alt={user.name}
                            src={user.url}
                            sx={{ width: 56, height: 56 }}
                        />
                    </StyledBadge>
                ))
            }
        </AvatarGroup>
    )
}

export default AvatarCarousel