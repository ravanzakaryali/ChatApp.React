import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { grey } from '@mui/material/colors'


const AppBar = styled('header')(({ theme }) => ({
    padding: '20px 0px',
    borderBottom: `1px solid ${grey[300]}`
}))


export default AppBar;