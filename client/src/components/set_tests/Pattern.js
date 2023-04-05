import React from 'react'

export default function Pattern(props) {
  return (
    <div className='pattern-block'>
      <img src={`http://localhost:5000/${props.image}`} alt="The first" className='pattern__photo'></img>
      <div className='pattern-box'><span className='pattern-box__text'>{props.TestName}</span></div>
    </div>
  )
}

Pattern.defaultProps = {image: "defaultPat" , TestName: "Без имени"}
