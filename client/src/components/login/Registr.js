import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputAdornment, IconButton, Input, InputLabel, FormControl, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState, useContext} from 'react';
import { NavLink } from "react-router-dom";
import { LOGIN, MAIN } from "../../router/utils";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Registr(){
    const {user} = useContext(Context) 
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
    const formik = useFormik({
        initialValues: {
            Name: '',
            Surname: '',
            email: '',
            password: '',
            repeat_password: ''
        },
        validationSchema: Yup.object({
            Name: Yup.string().min(1).max(30).required('Required'),
            Surname: Yup.string().min(1).max(50).required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup
            .string()
            .min(6)
            .matches(passwordRules, { message: "Please create a stronger password" })
            .required("Required"),
            repeat_password: Yup
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
        <div className="container_form_general_registration">
            <form className="container_form_general_registration_card" style={{display: 'flex'}} onSubmit={formik.handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    type="name"
                    variant="standard"
                    size="medium"
                    label="Имя"
                    fullWidth='true'
                    margin='none'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Name}
                    //color={formik.errors.email || user._error? 'error': ''}
                />
                <TextField
                    id="surname"
                    name="surname"
                    type="surname"
                    variant="standard"
                    size="medium"
                    label="Фамилия"
                    fullWidth='true'
                    margin='none'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Surname}
                />
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
                    //color={formik.errors.email || user._error? 'error': ''}
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
                <FormControl sx={{ width: '100%' }} variant="standard">
                    <InputLabel htmlFor="repeat_password" color={formik.errors.repeat_password && formik.touched.repeat_password ? 'error': ''}>Повторите пароль</InputLabel>
                    <Input
                        id="repeat_password"
                        name='repeat_password'
                        type={showPassword ? 'text' : 'password'}
                        size="medium"
                        margin='none'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.repeat_password}
                        //color={formik.errors.password && formik.touched.password ? 'error': ''}
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
                <Button type="submit" variant='contained' size='large' fullWidth='true' onClick={() => user.registration(formik.values.Name, formik.values.Surname, formik.values.email, formik.values.password)} sx={{ marginTop: '16px', fontWeight: 'bold' }}>Зарегистрироваться</Button>
                <div className='container_form_general_registration_card_buttons'>
                    <NavLink style={{ textDecoration: 'none' }} to={MAIN}>
                        <Button variant='text' size='small' sx={{ marginTop: '8px', textTransform: 'revert', color: 'white' }}>На главную</Button>\
                    </NavLink>
                    <NavLink to={LOGIN}>
                        <Button variant='text' size='small' sx={{ marginTop: '9px', textTransform: 'revert', color: 'white' }}>Уже есть аккаунт?</Button>
                    </NavLink>
                </div>
            </form>
            {user._error === '' ? ''
                :
                <Alert severity="error" sx={{marginTop: '16px', borderRadius: '4px'}}>{user._error}</Alert>
            }
        </div>
        
    )
}