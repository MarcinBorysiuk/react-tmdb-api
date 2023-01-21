import React from 'react'
import {Link} from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

function SinglePerson({ person }) {
  function getPersonPoster(posterPath, posterSize) {
      if (!posterPath) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
      return `https://image.tmdb.org/t/p/${posterSize}//${posterPath}`
    }
  
  const personPosterUrl = getPersonPoster(person.profile_path, 'w300')
  return (
    <Link to={"/person/" + person.id}>
        <div 
          className="movie-card flex flex-col text-white p-2 border-2 border-gray-700 bg-gray-800 cursor-pointer md:brightness-75 hover:brightness-100 duration-300"
        >
            <img className="w-[240px] h-[360px]" src={personPosterUrl} alt={person.name} />
            <div className="py-1 text-center">
                <span className="w-44">{person.name}</span>
            </div>
        </div>
    </Link>
  )
}

export default SinglePerson