import React from 'react'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

import Button from '@mui/material/Button';
import * as Yup from 'yup';
import "yup-phone";
import { Formik } from "formik";

export default function AccInfoForm() {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = Yup.object().shape({
        Name: Yup.string().min(1).max(30).typeError('Должно быть строкой').required('Обязательно'),
        Surname: Yup.string().min(1).max(30).typeError('Должно быть строкой').required('Обязательно'),
        Mail: Yup.string().email('Введите верную почту').required('Обязательно'),
        Phone: Yup
            .string()
            .nullable()
            .notRequired()
            .when('Phone', {
                is: (value) => value?.length,
                then: (rule) => rule.matches(phoneRegExp, 'Phone number is not valid'),
            }),
        Company: Yup
            .string()
            .nullable()
            .notRequired()
            .when('Company', {
                is: (value) => value?.length,
                then: (rule) => rule.min(1),
            }),
    },  [
        ['Company', 'Company'],
        ['Phone', 'Phone'],
    ])
  return (
    <div>
        <div className='accInfo__BigBlock'>
        <Formik
                initialValues={{
                    Name: 'Мария',
                    Surname: 'Гаврилова',
                    Company: '',
                    Phone: '',
                    Mail: 'mag2003tag@gmail.com',
                }}
                validateOnBlur
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            
        >
        {({ values, errors, touched, handleBlur, handleChange }) => (<>
            <div className='accInfo__thirdBlock'>
            <TextField 
            className = "textField"
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
            >
        </TextField>
        <TextField 
            id="Company"
            name="Company"
            type="Company"
            variant="standard"
            size="medium"
            label="Компания"
            fullWidth='true'
            margin='none'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Company}
            error={ touched.Company && errors.Company ? true: false}
            >
        </TextField>
        <TextField 
            id="Phone"
            name="Phone"
            type="Phone"
            variant="standard"
            size="medium"
            label="Телефон"
            fullWidth='true'
            margin='none'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Phone}
            error={ touched.Phone && errors.Phone ? true: false}
            >
        </TextField>
        <TextField 
            id="Mail"
            name="Mail"
            type="Mail"
            variant="standard"
            size="medium"
            label="Почта для обратной связи"
            fullWidth='true'
            margin='none'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Mail}
            error={touched.Mail && errors.Mail ? true: false}
            >
        </TextField>
        <div className='dop'>
            <span className='dop__text'>Сброс пароля</span>
        </div>
        </div>
        <div className='accInfo__forthBlock'>
            <Avatar sx={{  width: "120px", height: "120px", background: "#90CAF9", color: "#121212" }} />
            <div className='photo__text'><span className='text'>Cменить</span></div>
            <div className='space'></div>
            <Button type="submit" disabled={(!values.Name || !values.Surname || !values.Mail  || errors.Mail || errors.Company 
                || errors.Name || errors.Phone || errors.Surname || (!touched.Name && !touched.Surname && !touched.Phone && !touched.Company && !touched.Mail )) }  variant='contained' size='large' fullWidth='true' >Изменить</Button>
        </div>
        </> )}
        </Formik>
    </div>
    </div>
  )
}