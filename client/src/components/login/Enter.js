import React, { useContext } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputAdornment, IconButton, Input, InputLabel, FormControl, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useState} from 'react';
import { MAIN, REGISTRATION } from "../../router/utils";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { Formik } from 'formik';
import * as Yup from 'yup';

function Enter(){
    const {user} = useContext(Context) 
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Введите верную почту').required('Обязательно'),
        password: Yup.string().min(8).max(255).matches(passwordRules, {message: 'Пожалуйста, придумайте более надежный пароль'}).typeError('Должно быть строкой').required('Введите пароль'),
    })

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    return(
        <div className="container_form_general_enter">
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validateOnBlur
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <>
                    <div className='container_form_general_enter_card' style={{display: 'flex'}} onSubmit={handleSubmit}>
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
                            error={user._authError ? true: false}
                        />
                        <FormControl sx={{ width: '100%' }} variant="standard">
                            <InputLabel htmlFor="password" error={touched.password && errors.password ? true: false}>Пароль</InputLabel>
                            <Input
                                id="password"
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                size="medium"
                                margin='none'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={user._authError ? true: false}
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
                        <Button type="submit" disabled={!values.email || !values.password} variant='contained' size='large' fullWidth='true' sx={{ fontWeight: 'bold' }} onClick={() => user.login(values.email, values.password)}>Вход</Button>
                        <div className='container_form_general_enter_card_buttons'>
                            <Button variant='text' size='small' sx={{ textTransform: 'revert', color: 'white' }} onClick={() => window.location.assign(MAIN)}>На главную</Button>
                            <Button variant='text' size='small' sx={{ textTransform: 'capitalize', color: 'white' }} onClick={() => window.location.assign(REGISTRATION)}>Зарегистрироваться</Button>
                        </div>
                    </div>
                </>
            )}    
            </Formik>
            {user._authError === '' ? ''
                :
                <Alert severity="error" sx={{marginTop: '16px', borderRadius: '4px'}}>{user._authError}</Alert>
            }
        </div>
        
    )
}

export default observer(Enter);