import React, { useState, useEffect } from 'react'
import SinglePerson from '../components/SinglePerson'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'

function People({ API_KEY, API_URL }) {
  const [people, setPeople] = useState(null)
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(null)

  useEffect(() => {
    fetchPeople()
  }, [page])

  function fetchPeople() {
    fetch(`${API_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
        window.scrollTo(0,0)
        setLastPage(data.total_pages)
        setPeople(data.results)
      }, 300)
    })
  }

  return (
    <div className='h-full pt-24 pb-24 px-4'>
      {
        people ? (  
          <>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {
                people?.map((person) => {
                  return <SinglePerson person={person} key={person.id}/>
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

export default People