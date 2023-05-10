import React from 'react'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import "yup-phone";
import { Formik } from "formik";
import { useContext, useState, useRef } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { saveChanges } from '../../services/TestService';
import { TEST_SET } from '../../router/utils';
import { values } from 'mobx';

function AccInfoForm() {
    const {user} = useContext(Context)

    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState(`http://localhost:5000/${user._user.Photo}`)
    function handle_Change(e) {
        setFile(e.target.files[0]);
        setFileURL(URL.createObjectURL(e.target.files[0]))
    }

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
                    Name: user._user.Name,
                    Surname: user._user.Surname,
                    Company: user._user.company,
                    Phone: user._user.phone,
                    Mail: user._user.emailForFeedback ? user._user.emailForFeedback : user._user.email,
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
        <Avatar src={fileURL} sx={{  width: "120px", height: "120px", background: "#90CAF9", color: "#121212" }} />
        <div className='photo__text'>
            <span className='text' onClick={handleClick}>Cменить</span>
            <input
                name='Photo'
                ref={hiddenFileInput}
                onChange={handle_Change}
                style={{display: 'none'}}
                type='file'
            />
            </div>
            <div className='space'></div>
            <Button onClick={() => {
                const formData = new FormData()
                formData.append('id', user._user.id)
                formData.append('Name', values.Name)
                formData.append('Surname', values.Surname)
                formData.append('company', values.Company)
                formData.append('phone', values.Phone)
                formData.append('emailForFeedback', values.Mail)
                formData.append('Photo', file)
                console.log(formData.get('Photo'))
                saveChanges(formData).then(res => window.location.assign(TEST_SET))
            }} type="submit" style={{cursor: 'pointer'}} variant='contained' size='large' fullWidth='true' >Изменить</Button>
        </div>
        </> )}
        </Formik>
    </div>
    </div>
  )
}

export default observer(AccInfoForm)