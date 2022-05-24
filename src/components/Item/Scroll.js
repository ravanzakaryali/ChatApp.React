import styled from '@emotion/styled';

const Scroll = styled('div')(({ theme }) => ({
    overflowY: "scroll",
    height: `calc(100vh - 250px)`,
}))

export default Scroll;