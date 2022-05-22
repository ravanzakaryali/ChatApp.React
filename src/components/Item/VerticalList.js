import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { grey } from '@mui/material/colors'


const VerticalList = styled(Paper)(({ theme }) => ({
    padding: "5px",
    textAlign: "center",
    border: "none",
    flexDirection: 'column',
    height: "100vh",
    display: "flex",
    fontSize: 22,
    boxShadow: `0 2px 4px ${grey[400]}`,
}))

export default VerticalList;