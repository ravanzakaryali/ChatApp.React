import { Paper } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { SiRocketdotchat } from 'react-icons/si';
import { Outlet } from 'react-router-dom';
import { Grid } from 'swiper';
import Col from '../../components/Item/Col';
import Row from '../../components/Item/Row';

const Auth = () => {
    return (
        <Container>
            <Paper>
                <Row container>
                    <Col item xs={6}>
                        <SiRocketdotchat />
                    </Col>
                    <Col item xs={6}>
                        <Outlet />
                    </Col>
                </Row>
            </Paper>
        </Container>
    )
}

export default Auth