import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../components/Loader'
import PersonDetailsMovies from '../components/PersonDetailsMovies'

function PersonDetails({ API_KEY, API_URL }) {
  const {id} = useParams()
  const [actor, setActor] = useState()
  const [allMovies, setAllMovies] = useState()

  useEffect(() => {
    fetchActor()
    fetchActorsMovies()
  }, [])

  function fetchActor() {
    fetch(`${API_URL}/person/${id}?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        window.scrollTo(0,0)
        setActor(data)
        console.log(data)
      }, 300)
    })
  }

  function fetchActorsMovies() {
    fetch(`${API_URL}/person/${id}/combined_credits?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      const movies = data.cast
      const filteredMovies = movies.filter(movie => movie.character !== "" && movie.character !== "Self" && movie.character !== "Self - Guest" && movie.character !== "Herself" && movie.character !== "Himelf")
      const sortedMovies = filteredMovies.sort((a, b) => parseFloat(b.popularity) - parseFloat(a.popularity))
      const slicedSortedMovies = sortedMovies.slice(0, 10)
      setAllMovies(slicedSortedMovies)
    })
  }

  function getPersonProfile(profilePath, profileSize) {
    if (!profilePath) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'
    return `https://image.tmdb.org/t/p/${profileSize}//${profilePath}`
  }

  const personProfile = getPersonProfile(actor?.profile_path, 'w300')
  const gender = actor?.gender === 1 ? 'Female' : 'Male'
  console.log(allMovies)
  return (

    <div className="h-full pt-24 pb-24 px-4">
      {
        actor ? (
          <div className='w-4/5 mx-auto'>
            <div className='flex flex-col items-center justify-center gap-6 md:flex-row md:items-start'>
              <img src={personProfile} className="max-w-[300px] max-h-[450px] rounded-[8px]" />
              <div>
                <h1 className='text-4xl pb-2'>{actor.name}</h1>
                <div className=''>
                  {actor.biography}
                </div>
                <div className='mt-4'>
                  <p>
                    <span className='text-gray-400 pr-1'>Birthday: </span> {actor.birthday}
                  </p>
                  <p>
                    <span className='text-gray-400 pr-1'>Place of birth: </span> {actor.place_of_birth}
                  </p>
                  <p>
                    <span className='text-gray-400 pr-1'>Gender: </span> {gender}
                  </p>
                  <p>
                    <span className='text-gray-400 pr-1'>Known for: </span> {actor.known_for_department}
                  </p>
                </div>
              </div>
            </div>
            <hr className='mt-10'/>
            <h1 className='text-3xl mt-6'>Known For</h1>
            <div className='flex gap-6 py-4 overflow-x-scroll movies-container'>
              
                {
                  allMovies?.map(movie => {
                    return <PersonDetailsMovies movie={movie} />
                  })
                }
              
            </div>
          </div>
          
        ) : (
          <Loader />
        )
      }
    </div>
  )
}

export default PersonDetails