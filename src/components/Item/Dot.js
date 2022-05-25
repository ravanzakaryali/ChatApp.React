import React from 'react'
import StyledBadge from '../Avatar/StyledBadge'

const Dot = ({ sx }) => {
    return (
        <StyledBadge
            sx={sx}
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            variant='dot'
        ></StyledBadge>
    )
}

export default Dot