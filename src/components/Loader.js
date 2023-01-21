import React from 'react'
import { FaSpinner } from 'react-icons/fa'

function Loader() {
  return (
    <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-900 opacity-70 z-30'>
        <div className='flex items-center gap-2'>
            <div className='animate-spin text-5xl'>
                <FaSpinner fill=" rgb(74 222 128)"/>
            </div>
            <span className='text-4xl'>Loading...</span>
        </div>
        
    </div>
  )
}

export default Loader