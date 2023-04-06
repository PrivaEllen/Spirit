import React from 'react'
import TextField from '@mui/material/TextField';


export default function AccInfoForm() {

  return (
    <div>
        <div className='accInfo__thirdBlock'>
        <TextField 
            className = "textField"
            id="Name"
            name="Name"
            type="Name"
            variant="standard"
            defaultValue="Мария"
            size="medium"
            label="Имя"
            fullWidth='true'
            margin='none'
            >
        </TextField>
        <TextField 
            id="Surname"
            name="Surname"
            type="Surname"
            variant="standard"
            defaultValue="Гаврилова"
            size="medium"
            label="Фамилия"
            fullWidth='true'
            margin='none'
            >
        </TextField>
        <TextField 
            id="Company"
            name="Company"
            type="Company"
            variant="standard"
            defaultValue="Oggetto"
            size="medium"
            label="Компания"
            fullWidth='true'
            margin='none'
            >
        </TextField>
        <TextField 
            id="Phone"
            name="Phone"
            type="Phone"
            variant="standard"
            defaultValue="89525682416"
            size="medium"
            label="Телефон"
            fullWidth='true'
            margin='none'
            >
        </TextField>
        <TextField 
            id="Mail"
            name="Mail"
            type="Mail"
            variant="standard"
            defaultValue="mag2003tag@gmail.com"
            size="medium"
            label="Почта для обратной связи"
            fullWidth='true'
            margin='none'
            >
        </TextField>
        <div className='dop'>
            <span className='dop__text'>Сброс пароля</span>
        </div>
        </div>
    </div>
  )
}
