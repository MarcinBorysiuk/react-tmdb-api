import React from 'react'
import { FaStar } from 'react-icons/fa'


function MovieDescripiton({ movie }) {

  const releaseYear = movie?.release_date ? movie.release_date.slice(0,4) : null
  const voteAverage = movie?.vote_average ? movie.vote_average.toFixed(1) : null
  const genres = movie?.genres ? movie.genres.map(genre => {return <p key={genre.id}>{genre.name}</p>}) : null
  
  return (
    <div className='p-3'>
      <h1 className='text-4xl font-bold lg:text-5xl'>{movie.title}</h1>
      <div className='flex justify-center gap-6 text-lg pt-2 md:justify-start'>
        
        <p>{releaseYear}</p>
        <p>{movie.runtime} mins</p>
        <p className='flex items-center gap-1'>{voteAverage} <FaStar fill="gold" size="14px"/></p>
      </div>
      <div className='flex flex-wrap justify-center gap-3 text-md pt-2 md:justify-start'>
        {genres}
      </div>
      <h3 className='text-lg pt-3 text-green-500'>
        {movie?.tagline?movie.tagline:null}
      </h3>
      
      <p className='pt-3 md:text-sm lg:text-lg'>
        {movie.overview}
      </p>
    </div>
  )
}

export default MovieDescripiton