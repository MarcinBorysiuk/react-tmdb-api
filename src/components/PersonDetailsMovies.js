import React from 'react'
import { FaStar } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function PersonDetailsMovies({movie}) { 
  function getMoviePoster(posterPath, posterSize) {
    if (!posterPath) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
    return `https://image.tmdb.org/t/p/${posterSize}//${posterPath}`
  }
  const moviePoster = getMoviePoster(movie.poster_path, 'w300')
  const voteAverage = movie?.vote_average ? movie.vote_average.toFixed(1) : null
  const releaseYear = movie?.release_date ? movie.release_date.slice(0,4) : null || movie?.first_air_date ? movie.first_air_date.slice(0,4) : null
  return (
    <Link to={movie?.title? '/movie-details/' + movie.id : '/serie-details/' + movie.id}>
      <div className='min-w-[180px] min-h-[350px] bg-[#202021] cursor-pointer duration-300 hover:opacity-80'>
        <img src={moviePoster} />
        <div className='flex flex-col justify-between h-[80px] p-1'>
          <h1 className='text-[14px]'>{movie.title || movie.name}</h1>
          <div className='flex justify-between items-center text-[13px]'>
            <p>{releaseYear}</p>
            <div className='flex items-center gap-1'>
              {voteAverage}
              <FaStar fill="gold"/>
            </div>
          </div>
          
        </div>
      </div>
    </Link>
    
  )
}

export default PersonDetailsMovies