import { Button, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../../components/Item/Form'

const Login = () => {
    return (
        <Form>
            <Typography
                sx={{
                    marginBottom: '0.5rem',
                }}
                variant='h4'>
                Login
            </Typography>
            <FormControl fullWidth>
                <TextField
                    sx={{
                        marginBottom: '1rem',
                    }}
                    id="username" label="Username" variant="outlined" />
                <TextField
                    sx={{
                        marginBottom: '1rem',
                    }}
                    id="password" label="Password" variant="outlined" />
                <FormControl
                    sx={{
                        marginBottom: '1rem',
                    }}
                >
                    <Link
                        to='/auth/register'
                    >New account</Link>
                </FormControl>
                <Button type='submit' variant='contained'>
                    Login
                </Button>
            </FormControl>
        </Form>

    )
}

export default Login