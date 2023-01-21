import React from 'react'
import { FaStar } from 'react-icons/fa'


function SerieDescription({ serie }) {

  const releaseYear = serie?.first_air_date ? serie.first_air_date.slice(0,4) : null
  const voteAverage = serie?.vote_average ? serie.vote_average.toFixed(1) : null
  const genres = serie?.genres ? serie.genres.map(genre => {return <p key={genre.id}>{genre.name}</p>}) : null
  
  return (
    <div className='p-3'>
      <h1 className='text-4xl font-bold lg:text-5xl'>{serie.name}</h1>
      <div className='flex justify-center gap-6 text-lg pt-2 md:justify-start'>
        
        <p>{releaseYear}</p>
        <p>{serie.number_of_seasons} Seasons</p>
        <p className='flex items-center gap-1'>{voteAverage} <FaStar fill="gold" size="14px"/></p>
      </div>
      <div className='flex flex-wrap justify-center gap-3 text-md pt-2 md:justify-start'>
        {genres}
      </div>
      <h3 className='text-lg pt-3 text-green-500'>
        {serie?.tagline?serie.tagline:null}
      </h3>
      
      <p className='pt-3 md:text-sm lg:text-lg'>
        {serie.overview}
      </p>
    </div>
  )
}

export default SerieDescription