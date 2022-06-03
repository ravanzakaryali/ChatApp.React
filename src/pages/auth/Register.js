import React, { useEffect } from 'react'
import Form from '../../components/Item/Form'
import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { authRegister } from '../../store/actions/authActions'
import { connect } from 'react-redux'


const Register = (props) => {
    const { registerForm, registerResult } = props;
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => registerForm(data);
    useEffect(() => {
        if (registerResult?.isRegitser === true) {
            navigate('login');
        }
    }, [navigate, registerResult])
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Typography
                sx={{
                    marginBottom: '0.5rem',
                }}
                variant='h4'>
                Register
            </Typography>
            <FormControl fullWidth>

                <TextField
                    {...register("name", { required: true })}
                    sx={{
                        margin: '0.5rem 0 0.2rem 0',
                    }} id="name" label="Name" variant="outlined" />
                {errors.name && <Typography color="red">Username is required</Typography>}

                <TextField
                    {...register("surname", { required: true })}
                    sx={{
                        margin: '0.5rem 0 0.2rem 0',
                    }} id="surname" label="Surname" variant="outlined" />
                {errors.surname && <Typography color="red">Surname is required</Typography>}

                <TextField
                    {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                    sx={{
                        margin: '0.5rem 0 0.2rem 0',
                    }} type="email" id="email" label="Email" variant="outlined" />
                {errors.email?.type === 'required' && <Typography color="red">Email is required</Typography>}
                {errors.email?.type === 'pattern' && <Typography color="red">example@gmail.com</Typography>}

                <TextField
                    {...register("password", { required: true, })}
                    sx={{
                        margin: '0.5rem 0 0.2rem 0',
                    }} type='password' id="password" label="Password" variant="outlined" />
                {errors.password && <Typography color="red">Password is required</Typography>}

                <TextField
                    {...register("confirmPassword", {
                        required: true,
                    })}
                    sx={{
                        margin: '0.5rem 0 0.2rem 0',
                    }} type="password" id="confirmPassword" label="Confirm Password" variant="outlined" />
                {errors.confirmPassword && <Typography color="red">Confirm Password is required</Typography>}

                <FormControl sx={{ marginBottom: '1rem' }}>
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

const mapStateToProps = (state) => {
    return {
        registerResult: state.registerReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        registerForm: (data) => {
            dispatch(authRegister(data));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);