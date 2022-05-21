import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import React from 'react'

const Row = styled(Paper)(({ theme }) => ({
    padding: "5px",
    textAlign: "center",
    display: 'flex',
    border: "none",
    boxShadow: "none"
}))

export default Row