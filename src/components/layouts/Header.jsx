import React from 'react'
import { RiArrowGoBackFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <div className='header'>
        <h1 className='name'>Physics<span className='header-span'>Mate</span></h1>
        <button onClick={()=> navigate(-1)} className='go-back-btn'><RiArrowGoBackFill className='icon' /></button>
      </div>
      <small>Anshit Rangra</small>
    </header>
  )
}

export default Header
