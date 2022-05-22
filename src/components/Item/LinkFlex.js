import styled from '@emotion/styled';
import { Navigation } from '@mui/icons-material';
import { Tabs } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const LinkFlex = styled(Link)(({ theme }) => ({
    display: "flex",
    color: "black",
    transition: "0.3s",
    "&:hover": {
        color: theme.palette.primary.main
    }
}))


export default LinkFlex;