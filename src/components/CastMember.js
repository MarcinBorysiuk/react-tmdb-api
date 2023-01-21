import React from 'react'
import {Link} from 'react-router-dom'

function CastMember({ actor }) {

  function getActorImg(path, size) {
    if (!path) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
    return `https://image.tmdb.org/t/p/${size}//${path}`
  }

  const actorImgUrl = getActorImg(actor.profile_path, "w185")

  return (
    <Link to={'/person/' + actor.id}>
      <div className='py-2 hover:opacity-80 duration-300'>
        <img src={actorImgUrl} alt={actor.name} className='mx-auto w-[185px] h-[277px] md:w-[100px] md:h-[160px] lg:w-[120px] lg:h-[190px] 2xl:w-[135px] 2xl:h-[200px]'/>
        <p className='md:w-[100px] md:text-sm md:mt-1'>{actor.name} as {actor.character}</p>
      </div>
    </Link>
  )
}

export default CastMember