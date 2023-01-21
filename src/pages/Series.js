import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from '../components/Loader'
import SingleSerie from '../components/SingleSerie'
import Pagination from '../components/Pagination'

function Series({ API_KEY, API_URL }) {
  const [series, setSeries] = useState(null)
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(null)
  const { listType } = useParams()

  useEffect(() => {
    fetchSeries()
  }, [listType, page])

  function fetchSeries() {
    fetch(`${API_URL}/tv/${listType}?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        window.scrollTo(0,0)
        setLastPage(data.total_pages)
        setSeries(data.results)
      }, 300)
    })
  }

  return (
    <div className='h-full pt-24 pb-24 px-4'>
      {
        series ? (
          <>
            {<div className='flex gap-5 text-base justify-center sm:text-lg md:text-xl md:py-6 lg:text-2xl lg:gap-8'>
            
                <Link to="/series/popular">
                  <span className={`${listType==='popular'?'text-green-500 underline':''} cursor-pointer hover:text-green-500 duration-300`}>Popular</span>
                </Link>
                <Link to="/series/top_rated">
                  <span className={`${listType==='top_rated'?'text-green-500 underline':''} cursor-pointer hover:text-green-500 duration-300`}>Top Rated</span>
                </Link>
                <Link to="/series/airing_today">
                  <span className={`${listType==='airing_today'?'text-green-500 underline':''} cursor-pointer hover:text-green-500 duration-300`}>Airing Today</span>
                </Link> 
            
            </div>}
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {
                series?.map((serie) => {
                  return <SingleSerie serie={serie} key={serie.id}/>
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

export default Series