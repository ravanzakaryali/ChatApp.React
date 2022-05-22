import styled from '@emotion/styled';
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