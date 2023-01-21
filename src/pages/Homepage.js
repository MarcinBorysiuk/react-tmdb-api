import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className='background-dark homepage flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat'>
      <div className='text-center p-1 brightness-100'>
        <h1 className='text-4xl md:text-6xl'>Welcome to <span className='text-green-500 whitespace-nowrap'>React Movie App</span></h1>
        <h4 className='text-md md:text-xl py-3'>Click below to check latest movies</h4>
        <Link to="/movies/now_playing">
          <button className='p-3 border-2 border-green-500 rounded-full mt-4 duration-500 hover:bg-green-500 hover:text-black'>Check movies</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Homepage