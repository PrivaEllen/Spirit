import React, { useContext } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputAdornment, IconButton, Input, InputLabel, FormControl, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import { MAIN, TESTS, REGISTRATION, LOGIN } from "../../router/utils";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Enter(){
    const {user} = useContext(Context)
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/

    const formik = useFormik({
        initialValues: {
        email: '',
        password: ''
        },
        validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup
        .string()
        .min(6)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
        }),
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return(
        <div className="container_form_general_enter">
            <form className='container_form_general_enter_card' style={{display: 'flex'}} onSubmit={formik.handleSubmit}>
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    variant="standard"
                    size="medium"
                    label="Почта"
                    fullWidth='true'
                    margin='none'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    color={formik.errors.email ? 'error': ''}
                />
                <FormControl sx={{ width: '100%' }} variant="standard">
                    <InputLabel htmlFor="password" color={formik.errors.password && formik.touched.password ? 'error': ''}>Пароль</InputLabel>
                    <Input
                        id="password"
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        size="medium"
                        margin='none'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        color={formik.errors.password && formik.touched.password ? 'error': ''}
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
                <Button type="submit" disabled={!formik.values.email || !formik.values.password} variant='contained' size='large' fullWidth='true' sx={{ fontWeight: 'bold' }} onClick={() => user.login(formik.values.email, formik.values.password)}>Вход</Button>
                <div className='container_form_general_enter_card_buttons'>
                    <Button variant='text' size='small' sx={{ textTransform: 'revert', color: 'white' }} onClick={() => window.location.assign(MAIN)}>На главную</Button>
                    <Button variant='text' size='small' sx={{ textTransform: 'capitalize', color: 'white' }} onClick={() => window.location.assign(REGISTRATION)}>Зарегистрироваться</Button>
                </div>
            </form>
            {user._authError === '' ? ''
                :
                <Alert severity="error" sx={{marginTop: '16px', borderRadius: '4px'}}>{user._authError}</Alert>
            }
        </div>
        
    )
}

export default observer(Enter);