import React from 'react'
import SmallIcon from '../tests/SmallIcon'

export default function AddTest() {
  return (
    <>
    <div className='pattern-block'>
      <div className='pattern-block__add'>
        <SmallIcon svg = {
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
                </svg>               
          }/>
          <span className='pattern-block__add__text'>Добавить тест</span>
        </div>
    </div>
    </>
  )
}

