import React from 'react'
import { GET_TEST } from '../../router/utils'

export default function UserTest(props) {
  return (
    <>
      <div className='pattern-block' onClick={() => window.location.assign(GET_TEST + '/' + props.testId)}>
      <img src={require(`../../../../backend/static/${props.image}`) } alt="The first" className='pattern__photo'></img>
      <div className='pattern-box'><span className='pattern-box__text'>{props.TestName}</span></div>
      <div className='pattern-box'>
      <svg width='24' height='24' viewBox='0 0 22 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V14H14V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C15.19 8.89 16 10.02 16 11.5V14H22V11.5C22 9.17 17.33 8 15 8Z' fill='white' fill-opacity='0.56'/>
        </svg>
        <div className='pattern-box__info'>
          <span className='pattern-box__time' style={{userSelect: 'none'}}>{props.TestTime}</span>
          <svg fill="#808080" width="22px" height="22px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
            <path style={{cursor: 'pointer'}} d="M8 2.5a1.22 1.22 0 0 1 1.25 1.17A1.21 1.21 0 0 1 8 4.84a1.21 1.21 0 0 1-1.25-1.17A1.22 1.22 0 0 1 8 2.5zm0 8.66a1.17 1.17 0 1 1-1.25 1.17A1.21 1.21 0 0 1 8 11.16zm0-4.33a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 1 1 0-2.34z"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}

UserTest.defaultProps = {image: "defaultPat.png" , TestName: "Без имени", TestTime: "00:00"}
