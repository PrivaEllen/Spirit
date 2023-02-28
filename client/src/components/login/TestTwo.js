import { useContext } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputAdornment, IconButton, Input, InputLabel, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState} from 'react';
import { NavLink } from "react-router-dom";
import { REGISTRATION } from "../../router/utils";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const TestTwo = () => {
    const {user} = useContext(Context)
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

    return(
        <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup
            .string()
            .min(5)
            .matches(passwordRules, { message: "Please create a stronger password" })
            .required("Required"),
            })}
        onSubmit={(values, actions) => {
            setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            }, 1000);
        }}
        >
        {props => (
            <form className='container_form_general_enter' style={{display: 'flex'}} onSubmit={props.handleSubmit}>
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    variant="standard"
                    size="medium"
                    label="Почта"
                    fullWidth='true'
                    margin='none'
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    color={props.errors.email ? 'error': ''}
                />
                <FormControl sx={{ width: '100%' }} variant="standard">
                    <InputLabel htmlFor="password" color={props.errors.password ? 'error': ''}>Пароль</InputLabel>
                    <Input
                        id="password"
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        size="medium"
                        margin='none'
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.password}
                        color={props.errors.password ? 'error': ''}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button variant='text' size="small" sx={{ marginTop: '-5px', textTransform: 'revert', color: 'white' }}>Забыли пароль?</Button>
                <Button variant='contained' size='large' fullWidth='true' sx={{ fontWeight: 'bold' }} onClick={() => user.login(props.values.email, props.values.password)}>Вход</Button>
                <div className='container_form_general_enter_buttons'>
                    <Button variant='text' size='small' sx={{ textTransform: 'revert', color: 'white' }}>На главную</Button>
                    <NavLink to={REGISTRATION}>
                        <Button variant='text' size='small' sx={{ textTransform: 'capitalize', color: 'white' }}>Зарегистрироваться</Button>
                    </NavLink>
                </div>
            </form>
        )}
        </Formik>
    )
};

export default observer(TestTwo);