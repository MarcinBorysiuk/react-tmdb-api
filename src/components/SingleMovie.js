import React from 'react'
import {Link} from 'react-router-dom'
import { FaStar } from 'react-icons/fa'


function SingleMovie({ movie }) {
  
  function getMoviePoster(posterPath, posterSize) {
      if (!posterPath) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
      return `https://image.tmdb.org/t/p/${posterSize}//${posterPath}`
    }

  const moviePosterUrl = getMoviePoster(movie.poster_path, 'w300')
  const voteAverage = movie?.vote_average ? movie.vote_average.toFixed(1) : null
  return (
    <Link to={"/movie-details/" + movie.id}>
        <div 
          className="movie-card flex flex-col text-white p-2 border-2 border-gray-700 bg-gray-800 cursor-pointer md:brightness-75 hover:brightness-100 duration-300"
        >
            <img className="w-[240px] h-[360px]" src={moviePosterUrl} alt={movie.title} />
            <div className="py-1 flex justify-between">
                <span className="w-44">{movie.title}</span>
                <span className="flex items-center gap-1">
                    {voteAverage}
                    <FaStar fill="gold"/>                      
                </span>
            </div>
        </div>
    </Link>
    
  )
}

export default SingleMovie