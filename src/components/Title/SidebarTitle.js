import { Grid, Typography } from '@mui/material'
import React from 'react'
import Row from '../Item/Row'

const SidebarTitle = ({ title }) => {
    return (
        <Row sx={{
            padding: "20px 0"
        }}>
            <Grid item xs={6}>
                <Typography variant='h2' sx={{
                    fontSize: "22px",
                    fontWeight: 'bold'
                }}>{title}</Typography>
            </Grid>
        </Row>
    )
}

export default SidebarTitle