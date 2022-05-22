import { Grid, Typography } from '@mui/material'
import React from 'react'
import Row from '../Item/Row'
import SearchAppBar from './Search'

const SidebarTitle = ({ title }) => {
    return (
        <Row>
            <Grid item xs={6} sx={{
                padding: "20px 0"
            }} >
                <Typography variant='h2' sx={{
                    fontSize: "22px",
                    fontWeight: '500'
                }}>{title}</Typography>
            </Grid>
            <SearchAppBar />
        </Row>
    )
}

export default SidebarTitle