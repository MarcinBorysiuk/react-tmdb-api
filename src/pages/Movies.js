import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import SingleMovie from '../components/SingleMovie'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'


function Movies({ API_KEY, API_URL }) {
  const [movies, setMovies] = useState(null)
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(null)
  const { listType } = useParams()


  useEffect(() => {
    fetchMovies()
  }, [listType, page])

  useEffect(() => {
    setPage(1)
  }, [listType])

  function fetchMovies() {
    fetch(`${API_URL}/movie/${listType}?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        window.scrollTo(0,0)
        setLastPage(data.total_pages)
        setMovies(data.results)
      }, 300)
    })
  } 

  return (
    <div className='h-full pt-24 pb-24 px-4'>
      {
        movies ? (
          <>
            {<div className='flex flex-col gap-5 text-base sm:text-lg md:flex-row md:justify-center md:text-xl md:py-6 lg:text-2xl'>
              <div className='flex justify-around md:gap-5'>
                <Link to="/movies/now_playing">
                  <span className={`${listType==='now_playing'?'text-green-500 underline':''} cursor-pointer hover:text-green-500 duration-300`}>Now Playing</span>
                </Link> 
                <Link to="/movies/popular">
                  <span className={`${listType==='popular'?'text-green-500 underline':''} cursor-pointer hover:text-green-500 duration-300`}>Popular</span>
                </Link>
              </div>
              <div className='flex justify-around md:gap-5'>
                <Link to="/movies/top_rated">
                  <span className={`${listType==='top_rated'?'text-green-500 underline':''} cursor-pointer hover:text-green-500 duration-300`}>Top Rated</span>
                </Link>
                <Link to="/movies/upcoming">
                  <span className={`${listType==='upcoming'?'text-green-500 underline':''} cursor-pointer hover:text-green-500 duration-300`}>Upcoming</span>
                </Link>
              </div>
            </div>}
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {
                movies?.map((movie) => {
                  return <SingleMovie movie={movie} key={movie.id}/>
                })
              }
            </div>
            <Pagination pageCount={lastPage} setPage={setPage} />
          </>
          
        ) : (
          <Loader />
        )
      }
    </div> 
  )
}

export default Movies