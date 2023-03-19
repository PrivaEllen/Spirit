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
import * as Yup from 'yup';
import { Formik } from "formik";

function Registr(){
    const {user} = useContext(Context) 
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    const validationSchema = Yup.object().shape({
        Name: Yup.string().min(1).max(30).typeError('Должно быть строкой').required('Обязательно'),
        Surname: Yup.string().min(1).max(30).typeError('Должно быть строкой').required('Обязательно'),
        email: Yup.string().email('Введите верную почту').required('Обязательно'),
        password: Yup.string().min(8).max(255).matches(passwordRules, {message: 'Пожалуйста, придумайте более надежный пароль'}).typeError('Должно быть строкой').required('Введите пароль'),
        repeat_password: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
    })

    const [showPassword, setShowPassword] = useState(true)
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return(
        <div className="container_form_general_registration">
            <Formik
                initialValues={{
                    Name: '',
                    Surname: '',
                    email: '',
                    password: '',
                    repeat_password: ''
                }}
                validateOnBlur
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <>
                    {touched.password && errors.password && 
                    <Alert severity="warning" sx={{borderRadius: '4px', textAlign: 'center', marginBottom: '56px', marginTop: '-30px'}}>Недостаточно надежный пароль</Alert>}

                    <div className="container_form_general_registration_card" style={{display: 'flex'}} onSubmit={handleSubmit}>
                        <TextField
                            id="Name"
                            name="Name"
                            type="Name"
                            variant="standard"
                            size="medium"
                            label="Имя"
                            fullWidth='true'
                            margin='none'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Name}
                            error={touched.Name && errors.Name ? true: false}
                        >
                        </TextField>
                        <TextField
                            id="Surname"
                            name="Surname"
                            type="Surname"
                            variant="standard"
                            size="medium"
                            label="Фамилия"
                            fullWidth='true'
                            margin='none'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Surname}
                            error={touched.Surname && errors.Surname ? true: false}
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={touched.email && errors.email || user._registrError ? true: false}
                        />
                        <FormControl sx={{ width: '100%' }} variant="standard">
                            <InputLabel htmlFor="password" error={touched.password && errors.password || (errors.repeat_password && touched.repeat_password) ? true: false}>Пароль</InputLabel>
                            <Input
                                id="password"
                                name='password'
                                type={showPassword ? 'password' : 'text'}
                                size="medium"
                                margin='none'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={(touched.password && errors.password) || (errors.repeat_password && touched.repeat_password) ? true: false}
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
                            <InputLabel htmlFor="repeat_password" error={touched.repeat_password && errors.repeat_password ? true: false}>Повторите пароль</InputLabel>
                            <Input
                                id="repeat_password"
                                name='repeat_password'
                                type={showPassword ? 'password' : 'text'}
                                size="medium"
                                margin='none'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.repeat_password}
                                error={touched.repeat_password && errors.repeat_password ? true: false}
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
                        <Button type="submit" disabled={!values.Name || !values.Surname || !values.email || !values.password || !values.repeat_password} variant='contained' size='large' fullWidth='true' onClick={() => user.registration(values.Name, values.Surname, values.email, values.password)} sx={{ marginTop: '16px', fontWeight: 'bold' }}>Зарегистрироваться</Button>
                        <div className='container_form_general_registration_card_buttons'>
                            <Button variant='text' size='small' sx={{ marginTop: '8px', textTransform: 'revert', color: 'white' }} onClick={() => window.location.assign(MAIN)}>На главную</Button>
                            <Link component="button" variant='body2' underline="hover" sx={{ marginTop: '11px', textTransform: 'revert', fontSize: '13px', color: 'white' }} onClick={() => window.location.assign(LOGIN)}>Уже есть аккаунт?</Link>
                        </div>
                    </div>
                    {touched.repeat_password && errors.repeat_password && <Alert severity="error" sx={{marginTop: '16px', borderRadius: '4px'}}>{errors.repeat_password}</Alert>}
            </>
            )}
            </Formik>
            {user._registrError === '' ? '' :
                <Alert severity="error" sx={{marginTop: '16px', borderRadius: '4px'}}>{user._registrError}</Alert>
            }     
        </div>
        
    )
}

export default observer(Registr);