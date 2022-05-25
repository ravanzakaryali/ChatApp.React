import React from 'react'
import StyledBadge from '../Avatar/StyledBadge'

const Dot = () => {
    return (
        <StyledBadge
            overlap='circular'
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            variant='dot'
        ></StyledBadge>
    )
}

export default Dot