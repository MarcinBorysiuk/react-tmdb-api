import React from 'react'

function MovieOptions({ chooseDisplayedMovieDetail, displayMovieInfo, displayTrailer, displayCast}) {
  
  return (
    <div className='hidden md:block'>
      <div className='flex gap-2 p-2'>
        <button 
            className={`${displayMovieInfo?'bg-green-500 text-black':''} p-2 border-[1px] border-green-500 rounded-full duration-500 hover:brightness-125 hover:border-white`}
            onClick={() => chooseDisplayedMovieDetail(true, false, false)}
        >
            Overview
        </button>
        <button 
            className={`${displayTrailer?'bg-green-500 text-black':''} p-2 border-[1px] border-green-500 rounded-full duration-500 hover:brightness-125 hover:border-white`}
            onClick={() => chooseDisplayedMovieDetail(false, true, false)}
        >
            Watch Trailer
        </button>
        <button 
            className={`${displayCast?'bg-green-500 text-black':''} p-2 border-[1px] border-green-500 rounded-full duration-500 hover:brightness-125 hover:border-white`}
            onClick={() => chooseDisplayedMovieDetail(false, false, true)}
        >
            View Cast
        </button>
      </div>
      <hr className='my-2 border-green-500'/>
    </div>
  )
}

export default MovieOptions