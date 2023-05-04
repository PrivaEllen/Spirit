import React, { useContext, useState, useRef } from 'react'
import AccInfoForm from './AccInfoForm'
import Avatar from '@mui/material/Avatar';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { saveChanges } from '../../services/TestService';

const AccInfo = props => {
    const {user} = useContext(Context)

    const hiddenFileInput = React.useRef(null);
  
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const [file, setFile] = useState(`http://localhost:5000/${user._user.Photo}`);
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className='accInfo__window'>
            <div className='accInfo__firstBlock'>
                <div className='accInfo__firstBlock__content'>
                    <span className='accInfo__text'>Моя учётная запись</span>
                </div>
            </div>
            <div className='accInfo__secBlock'>
                <div className='accInfo__secBlock__content'>
                    <span className='accInfo__text'>Ваша компания не зарегистрирована</span>
                    <button style={{cursor: 'pointer'}}>Исправить</button>
                </div>
            </div>
            <div className='accInfo__BigBlock'>
                <AccInfoForm/>
                <div className='accInfo__forthBlock'>
                <Avatar src={file} sx={{  width: "120px", height: "120px", background: "#90CAF9", color: "#121212" }} />
                <div className='photo__text'>
                    <span className='text' onClick={handleClick}>Cменить</span>
                    <input
                        name='Photo'
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{display: 'none'}}
                        type='file'
                    />
                </div>
                <div className='space'></div>
                <button style={{cursor: 'pointer'}}>Изменить</button>
                </div>

            </div>
        
        </div>
    )
}

export default observer(AccInfo)