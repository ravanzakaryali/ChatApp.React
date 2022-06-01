import { Button, FormControl, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Form from '../../components/Item/Form'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Typography
                sx={{
                    marginBottom: '0.5rem',
                }}
                variant='h4'>
                Login
            </Typography>
            <FormControl fullWidth>
                <TextField
                    {...register("userName", { required: true })}
                    sx={{ marginBottom: '0.2rem' }} id="userName" label="Username" variant="outlined" />
                {errors.userName && <Typography color="red">Username is required</Typography>}

                <TextField
                    type="password"
                    {...register("password", { required: true, })}
                    sx={{ margin: '1rem 0 0.2rem 0' }} id="password" label="Password" variant="outlined" />
                {errors.password && <Typography color="red">Password is required</Typography>}

                <FormControl sx={{ margin: '0.5rem 0' }}>
                    <Link to='/auth/register'> New account </Link>
                </FormControl>

                <Button type='submit' variant='contained'>
                    Login
                </Button>

            </FormControl>
        </Form>

    )
}

export default Login