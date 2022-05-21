import React from 'react'
import styled from '@emotion/styled';
import { ListItem, Paper } from '@mui/material';


const VerticalItem = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    border: "none",
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))


export default VerticalItem;