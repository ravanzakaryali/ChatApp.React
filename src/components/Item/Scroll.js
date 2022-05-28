import styled from '@emotion/styled';

const Scroll = styled.div(
    {
        overflowY: "scroll",
    },
    props => ({ height: `calc(100vh - ${props.height})` })
)
export default Scroll;