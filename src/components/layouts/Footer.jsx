import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='footer-part'>
        <IoCall className='icons' />
        <div>
          <h4>Call Me</h4>
          <h5>7807177101</h5>
        </div>
      </div>

      <div className='footer-part'>
      <MdOutlineMailOutline className='icons'/>
        <div>
          <h4>E-mail</h4>
          <h5>anshitrangra@outlook.com</h5>
        </div>
      </div>

      <div className='footer-part'>
      <FaRegUser className='icons' />
        <div>
          <h4>Creator</h4>
          <h5>Anshit Rangra</h5>
        </div>
      </div>

    </footer>
  )
}

export default Footer
