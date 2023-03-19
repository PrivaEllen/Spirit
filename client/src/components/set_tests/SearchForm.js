import React from 'react'
import SmallIcon from '../tests/SmallIcon'

export default function SearchForm() {
  return (
    <div  className="search">
      <form className="search__form">
            <button type="submit" className='search__button'></button>
            <input type="text" 
            placeholder="Поиск"
            className="search__input"/>
            <button className='close__button'></button>
        </form>
        <SmallIcon svg = {
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z"/>
                </svg>                  
        }/>
    </div>
  )
}
