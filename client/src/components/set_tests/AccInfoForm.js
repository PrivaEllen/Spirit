import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import { observer } from "mobx-react-lite";
import { Context } from '../..';

function AccInfoForm() {
    const {user} = useContext(Context)

    return (
        <div>
            <div className='accInfo__thirdBlock'>
            <TextField 
                className = "textField"
                id="Name"
                name="Name"
                type="Name"
                variant="standard"
                value={user._user.Name}
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
                value={user._user.Surname}
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
                value={user._user.company}
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
                value={user._user.phone}
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
                defaultValue={user._user.email}
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

export default observer(AccInfoForm)
