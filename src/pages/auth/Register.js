import React from 'react'
import Form from '../../components/Item/Form'
import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { authRegister } from '../../store/actions/authActions'
import { connect } from 'react-redux'


const Register = (props) => {
    const { registerForm } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => registerForm(data);

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
                    sx={{ marginBottom: '1rem' }} id="name" label="Name" variant="outlined" />
                {errors.userName && <Typography color="red">Username is required</Typography>}

                <TextField

                    {...register("surname", { required: true })}
                    sx={{
                        marginBottom: '1rem',
                    }} id="surname" label="Surname" variant="outlined" />
                {errors.surname && <Typography color="red">Surname is required</Typography>}

                <TextField
                    {...register("username", { required: true })}
                    sx={{
                        marginBottom: '1rem',
                    }} id="username" label="Username" variant="outlined" />
                {errors.username && <Typography color="red">Username is required</Typography>}

                <TextField
                    {...register("password", { required: true, })}
                    sx={{
                        marginBottom: '1rem',
                    }} id="password" label="Password" variant="outlined" />
                {errors.password && <Typography color="red">Password is required</Typography>}

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
        registerError: state.registerReducer,
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