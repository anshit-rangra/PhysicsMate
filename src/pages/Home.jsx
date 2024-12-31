import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main className='home'>
      <div className='child-container'>
        <h2>Physics<span>Mate</span></h2>
        <p>Physics is the study of how the universe works. It explores forces, motion, energy, and matter. From falling objects to shining stars, physics explains natural phenomena using experiments, observations, and math, helping us understand and shape the world around us.</p>
        <NavLink to={'/cards'}><button>Explore <FaLongArrowAltRight className='icons' /> </button></NavLink>
      </div>
    </main>
  )
}

export default Home
