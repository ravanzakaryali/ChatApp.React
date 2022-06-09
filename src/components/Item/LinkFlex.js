import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { grey } from '@mui/material/colors'

const LinkFlex = styled(Link)(({ theme }) => ({
    display: "flex",
    color: "black",
    transition: "0.3s",
    textDecoration: "none",
    "&:hover": {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.main,
    }
}))


export default LinkFlex;