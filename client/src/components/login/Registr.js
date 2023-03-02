import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputAdornment, IconButton, Input, InputLabel, FormControl, Alert, Link } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState, useContext} from 'react';
import { LOGIN, MAIN } from "../../router/utils";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Registr(){
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
                    id="Name"
                    name="Name"
                    type="Name"
                    variant="standard"
                    size="medium"
                    label="Имя"
                    fullWidth='true'
                    margin='none'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Name}
                    color={formik.errors.Name && formik.touched.Name ? 'error': ''}
                />
                <TextField
                    id="Surname"
                    name="Surname"
                    type="Surname"
                    variant="standard"
                    size="medium"
                    label="Фамилия"
                    fullWidth='true'
                    margin='none'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Surname}
                    color={formik.errors.Surname && formik.touched.Surname ? 'error': ''}
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
                    color={(formik.errors.email && formik.touched.email) || user._error ? 'error' : ''}
                />
                <FormControl sx={{ width: '100%' }} variant="standard">
                    <InputLabel htmlFor="password" color={(formik.errors.password && formik.touched.password) || (formik.values.password != formik.values.repeat_password) ? 'error': ''}>Пароль</InputLabel>
                    <Input
                        id="password"
                        name='password'
                        type={showPassword ? 'text' : 'password'}
                        size="medium"
                        margin='none'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        color={(formik.errors.password && formik.touched.password) || (formik.values.password != formik.values.repeat_password) ? 'error': ''}
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
                    <InputLabel htmlFor="repeat_password" color={(formik.errors.repeat_password && formik.touched.repeat_password) || (formik.values.password != formik.values.repeat_password) ? 'error': ''}>Повторите пароль</InputLabel>
                    <Input
                        id="repeat_password"
                        name='repeat_password'
                        type={showPassword ? 'text' : 'password'}
                        size="medium"
                        margin='none'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.repeat_password}
                        color={(formik.errors.repeat_password && formik.touched.repeat_password) || (formik.values.password != formik.values.repeat_password) ? 'error': ''}
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
                <Button type="submit" disabled={!formik.values.Name || !formik.values.Surname || !formik.values.email || !formik.values.password || !formik.values.repeat_password} variant='contained' size='large' fullWidth='true' onClick={() => user.registration(formik.values.Name, formik.values.Surname, formik.values.email, formik.values.password)} sx={{ marginTop: '16px', fontWeight: 'bold' }}>Зарегистрироваться</Button>
                <div className='container_form_general_registration_card_buttons'>
                    <Button variant='text' size='small' sx={{ marginTop: '8px', textTransform: 'revert', color: 'white' }} onClick={() => window.location.assign(MAIN)}>На главную</Button>
                    <Link component="button" variant='body2' underline="hover" sx={{ marginTop: '11px', textTransform: 'revert', fontSize: '13px', color: 'white' }} onClick={() => window.location.assign(LOGIN)}>Уже есть аккаунт?</Link>
                </div>
            </form>
            {user._registrError === '' ? ''
                :
                <Alert severity="error" sx={{marginTop: '16px', borderRadius: '4px'}}>{user._registrError}</Alert>
            }
        </div>
        
    )
}

export default observer(Registr);