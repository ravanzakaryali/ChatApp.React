import React from 'react'
import Form from '../../components/Item/Form'
import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <Form>
            <Typography
                sx={{
                    marginBottom: '0.5rem',
                }}
                variant='h4'>
                Register
            </Typography>
            <FormControl fullWidth>
                <TextField
                    sx={{ marginBottom: '1rem' }} id="name" label="Name" variant="outlined" />
                <TextField
                    sx={{
                        marginBottom: '1rem',
                    }} id="surname" label="Surname" variant="outlined" />
                <TextField
                    sx={{
                        marginBottom: '1rem',
                    }} id="username" label="Username" variant="outlined" />
                <TextField
                    sx={{
                        marginBottom: '1rem',
                    }} id="password" label="Password" variant="outlined" />
                <FormControl
                    sx={{
                        marginBottom: '1rem',
                    }}
                >
                    <Link
                        to='/auth/login'
                    >You have a account?</Link>
                </FormControl>
                <Button type='submit' variant='contained'>
                    Register
                </Button>
            </FormControl>
        </Form>
    )
}

export default Register