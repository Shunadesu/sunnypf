import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <div className="icon">{props.icon}</div>
        <span className="timeline__date">{props.year}</span>

        <h3 className='timeline__title'>{props.title}</h3>
        <p className='timeline__text'>{props.decs}</p>
    </div>
  )
}

export default Card