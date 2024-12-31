import React from 'react'
import { NavLink } from 'react-router-dom'

const CardContainer = (props) => {
  return (
    <NavLink className={"zxzx"} to={`/cards/${props.route}`}>
    <div className='card'>
      <h2>{props.data.title}</h2>
      <h4>{props.data.formula}</h4>
    </div>
    </NavLink>
  )
}

export default CardContainer
