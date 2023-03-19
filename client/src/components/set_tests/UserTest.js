import React from 'react'


export default function UserTest(props) {
  return (
    <>
      <div className='pattern-block'>
      <img src={require(`../../images/${props.image}.png`) } alt="The first" className='pattern__photo'></img>
      <div className='pattern-box'><span className='pattern-box__text'>{props.TestName}</span></div>
      <div className='pattern-box'>
        <svg fill="grey" width="22px" height="22px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" >
          <path fill="#808080" d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"/>
        </svg>
        <div className='pattern-box__info'>
          <span className='pattern-box__time'>{props.TestTime}</span>
          <svg fill="#808080" width="22px" height="22px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier">
            <path d="M8 2.5a1.22 1.22 0 0 1 1.25 1.17A1.21 1.21 0 0 1 8 4.84a1.21 1.21 0 0 1-1.25-1.17A1.22 1.22 0 0 1 8 2.5zm0 8.66a1.17 1.17 0 1 1-1.25 1.17A1.21 1.21 0 0 1 8 11.16zm0-4.33a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 1 1 0-2.34z"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}

UserTest.defaultProps = {image: "defaultPat" , TestName: "Без имени", TestTime: "00:00"}
