import React, { useState, useEffect } from 'react'
import SingleMovie from '../components/SingleMovie'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'

function SearchPage({ API_KEY, API_URL }) {
  const [movies, setMovies] = useState(null)
  const { searchKey } = useParams()

  useEffect(() => {
    fetchSearchedMovies()
  }, [])
  
  function fetchSearchedMovies() {
    fetch(`${API_URL}/search/movie?query=${searchKey}&api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        setMovies(data.results)
      }, 300)
    })
  }

  return (
    <>
      {
        movies ? ( 
          <div className="h-full flex flex-wrap justify-center gap-4 pt-24 pb-24 px-4">
            {
              movies.map((movie) => {
                return <SingleMovie movie={movie} key={movie.id}/>
              })
            }
          </div>
        ) : (
          <Loader />
        )
      }
    
    </>
    
  )
}

export default SearchPage