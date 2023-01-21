import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

function Navbar({ location }) {
  const [searchKey, setSearchKey] = useState('')
  const [hamburgerClicked, setHamburgerClicked] = useState(false)
  const [listType, setListType] = useState()
  const navigate = useNavigate()
  
  function searchMovie() {
    if (searchKey) {
      navigate(`/search/${searchKey}`)
    } else {
      return
    }
  }
  
  function handleMenuClick() {
    setHamburgerClicked(hamburgerClicked => !hamburgerClicked)
  }

  let opened = hamburgerClicked?'open':''
  let menuShown = hamburgerClicked?'':'hidden'
  
  return (
    <nav>
        <div className='bg-gradient-to-r from-black to-gray-500 w-screen fixed top-0 px-6 py-5 flex items-center border-b-white border-b-2 z-10'>
            <Link to="/">
              <h1 className="text-3xl font-bold text-green-500 duration-500 hover:text-white">
                  React Movie App
              </h1>
            </Link>
            
            <div className='hidden gap-4 mx-10 md:flex lg:text-xl ml-auto'>
              <Link to="/movies/now_playing">
                <span className='cursor-pointer hover:text-green-500 duration-300'>Movies</span>
              </Link> 
              <Link to="/series/popular">
                <span className='cursor-pointer hover:text-green-500 duration-300'>TV Shows</span>
              </Link>
              <Link to="/people">
                <span className='cursor-pointer hover:text-green-500 duration-300'>People</span>
              </Link>
            </div>
            <form onSubmit={searchMovie} className='hidden md:block relative'>
                <input 
                  className='px-3 py-1 rounded-full border-none outline-none text-black lg:px-6' 
                  value={searchKey}
                  onChange={e => setSearchKey(e.target.value)}
                  type="text" 
                  placeholder='Search for movies...' 
                
                />
                <button 
                  className="absolute top-0.25 right-0.5 p-1.5 border-2 rounded-full bg-green-500 hover:opacity-80"
                  type="submit"
                >
                    <FaSearch />
                </button>
            </form>
            <button 
              className={`${opened} block hamburger md:hidden focus:outline-none ml-auto px-4`}
              onClick={handleMenuClick}
            >
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom '></span>
            </button>
        </div>
        <div>
            <div className={`${menuShown} fixed flex flex-col w-full items-center self-end py-8 mt-20 space-y-6 font-bold bg-gradient-to-r from-black to-gray-500 drop-shadow-md border-2 border-white z-10 md:hidden`}>
                <Link to="/movies/now_playing">
                  <span className='cursor-pointer hover:text-green-500 duration-300'>Movies</span>
                </Link> 
                <Link to="/series/popular">
                  <span className='cursor-pointer hover:text-green-500 duration-300'>TV Shows</span>
                </Link>
                <Link to="/people">
                  <span className='cursor-pointer hover:text-green-500 duration-300'>People</span>
                </Link>
                
                <form onSubmit={searchMovie} className='relative'>
                  <input 
                    className='px-6 py-1 rounded-full border-none outline-none text-black' 
                    value={searchKey}
                    onChange={e => setSearchKey(e.target.value)}
                    type="text" 
                    placeholder='Search for movies...' 
                  />
                  <button 
                    className="absolute top-0.25 right-0.5 p-1.5 border-2 rounded-full bg-green-500 hover:opacity-80"
                    type="submit"
                  >
                      <FaSearch />
                  </button>
                </form>
            </div>
        </div>
        
    </nav>
    
  )
}

export default Navbar