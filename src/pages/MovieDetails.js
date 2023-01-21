import React, { useState, useEffect } from 'react'
import CastMember from '../components/CastMember'
import MovieDescripiton from '../components/MovieDescripiton'
import MovieTrailer from '../components/MovieTrailer'
import MovieOptions from '../components/MovieOptions'
import Loader from '../components/Loader'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useParams } from "react-router-dom"

function MovieDetails({ API_KEY, API_URL }) {
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState(null)
  const [displayMovieInfo, setDisplayMovieInfo] = useState(true)
  const [displayTrailer, setDisplayTrailer] = useState(false)
  const [displayCast, setDisplayCast] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()


  useEffect(() => {
      window.scrollTo(0, 0)
      fetchMovie()
      fetchCast()
  }, [])

  function fetchMovie() {
      fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          setMovie(data)
        }, 300)
      })
  }

  function fetchCast() {
    fetch(`${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(data => setCast(data.cast))
  }

  function chooseDisplayedMovieDetail(movieInfoChosen, trailerChosen, castChosen) {
    setDisplayMovieInfo(movieInfoChosen)
    setDisplayTrailer(trailerChosen)
    setDisplayCast(castChosen)
  }

  function goBack() {
    navigate(-1);
  }

  function getMoviePoster(posterPath, posterSize) {
      return `https://image.tmdb.org/t/p/${posterSize}//${posterPath}`
    }

  const backdropUrl = getMoviePoster(movie?.backdrop_path, "w1280")
  const posterUrl = getMoviePoster(movie?.poster_path, 'w500')

  return (
        <>
          {
            movie ? (
              <div style={{ backgroundImage: `url(${backdropUrl})` }}
                className="movie-details-background flex bg-cover bg-center bg-no-repeat z-20 relative md:h-screen md:justify-center items-center"
              >   
                <button onClick={goBack} className='absolute top-3 left-3 cursor-pointer p-3 bg-black opacity-80 rounded-full hover:opacity-100 z-10'>
                    <FaArrowLeft size="30px" fill="rgb(34 197 94)"/> 
                </button>
              
                <div className='movie-details-content background-img-shadow relative flex flex-col md:flex-row  md:max-h-[480px] lg:max-h-[540px] 2xl:max-h-[630px]'>
                  
                  <div className='movie-details-img'>
                      <img src={posterUrl} alt={movie.title} className='w-screen md:max-w-[320px] lg:max-w-[360px] 2xl:max-w-[420px]'/>
                  </div>
                
                  <div className='movie-details-info relative flex flex-col md:w-[440px] lg:w-[550px] 2xl:w-[640px]'>
                    
                    <div className='text-center md:text-left'>
                      <MovieOptions 
                        chooseDisplayedMovieDetail={chooseDisplayedMovieDetail}
                        displayMovieInfo={displayMovieInfo}
                        displayTrailer={displayTrailer}
                        displayCast={displayCast}
                      />
                      {/* MOVIE INFO */}
                      <div className={`${displayMovieInfo?'':'md:hidden'}`}>
                        <MovieDescripiton 
                          movie={movie}
                        />
                      </div>
                                                  
                      {/* MOVIE TRAILER */}
                      <div className={`${displayTrailer?'':'md:hidden'} relative h-[400px] w-full md:static`}>
                        {movie.videos?<MovieTrailer movie={movie}/>:null}
                      </div>
                      {/* MOVIE CAST */}
                      <div className={`${displayCast?'':'md:hidden'} md:flex md:justify-evenly md:flex-wrap md:gap-3 md:max-w-[500px] md:max-h-[380px] md:p-2 md:overflow-auto no-scrollbar lg:max-h-[440px] 2xl:max-w-[640px] 2xl:max-h-[520px]`}>
                        <h2 className='text-xl py-4 md:hidden'>Movie Cast</h2>
                        {
                          cast?cast.map(actor => {
                            return <CastMember actor={actor} key={actor.cast_id}/>
                          }):null
                        }
                      </div>
                    </div>                  
                  </div>
                </div>
              </div>
            ) : (
              <Loader />
            )
          } 
        </>
        
  )
}

export default MovieDetails