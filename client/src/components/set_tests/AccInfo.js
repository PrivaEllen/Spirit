import React from 'react'
import AccInfoForm from './AccInfoForm'
import Avatar from '@mui/material/Avatar';

export default function AccInfo() {
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
                <button>Исправить</button>
            </div>
        </div>
        <div className='accInfo__BigBlock'>
            <AccInfoForm/>
            <div className='accInfo__forthBlock'>
            <Avatar sx={{  width: "120px", height: "120px", background: "#90CAF9", color: "#121212" }} />
            <div className='photo__text'><span className='text'>Cменить</span></div>
            <div className='space'></div>
            <button>Изменить</button>
            </div>

        </div>
      
    </div>
  )
}
