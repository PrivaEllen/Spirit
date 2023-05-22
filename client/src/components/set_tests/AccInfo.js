import React from 'react'
import AccInfoForm from './AccInfoForm'
import { Button } from '@mui/material'

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
                <Button variant='contained' size='large' fullWidth='true' style={{cursor: 'pointer'}}>Исправить</Button>
            </div>
        </div>
        <AccInfoForm/>
    </div>
  )
}