import { Icon, Paper } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { TbMessages } from 'react-icons/tb';
import { Outlet } from 'react-router-dom';
import Col from '../../components/Item/Col';
import Row from '../../components/Item/Row';
import { grey } from '@mui/material/colors';


const Auth = () => {
    return (
        <Container sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
        }}>
            <Paper
                sx={{
                    width: '100%',
                    height: '600px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0px 0px 10px rgba(0,0,0,0.3)',
                }}>
                <Row container sx={{
                    height: '100%',
                }}>
                    <Col item xs={6} sx={{
                        padding: '2rem',
                        backgroundColor: grey[200],
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Icon sx={{
                            fontSize: '5rem',
                        }}>
                            <TbMessages />
                        </Icon>
                    </Col>
                    <Col item xs={6} sx={{
                        padding: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        <Outlet />
                    </Col>
                </Row>
            </Paper>
        </Container>
    )
}

export default Auth