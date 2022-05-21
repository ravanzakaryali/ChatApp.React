import React from 'react'
import styled from '@emotion/styled';
import { List, ListItem, Paper } from '@mui/material';


const VerticalList = styled(Paper)(({ theme }) => ({
    padding: "5px",
    textAlign: "center",
    border: "none",
    boxShadow: "none",
    maxWidth: 75,
    minWidth: 75,
    flexDirection: 'column',
    height: "100vh",
    display: "flex",
    fontSize: 20
}))

export default VerticalList;