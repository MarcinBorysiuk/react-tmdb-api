import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Homepage from './pages/Homepage'
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Movies from "./pages/Movies";
import Series from './pages/Series'
import SearchPage from './pages/SearchPage';
import MovieDetails from './pages/MovieDetails';
import SerieDetails from './pages/SerieDetails';
import People from './pages/People';
import PersonDetails from './pages/PersonDetails';


function App() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const API_URL = 'https://api.themoviedb.org/3'
  const location = useLocation()
  
  return (
    <div className='relative min-h-screen'>
      {location.pathname !== "/" && <Navbar location={location}/>}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="movies/:listType" element={<Movies API_KEY={API_KEY} API_URL={API_URL}/>} />
        <Route path="movie-details/:id" element={<MovieDetails API_KEY={API_KEY} API_URL={API_URL}/>} />
        <Route path="serie-details/:id" element={<SerieDetails API_KEY={API_KEY} API_URL={API_URL}/>} />
        <Route path="search/:searchKey" element={<SearchPage API_KEY={API_KEY} API_URL={API_URL}/>} />
        <Route path="/series/:listType" element={<Series API_KEY={API_KEY} API_URL={API_URL} />} />
        <Route path="/people" element={<People API_KEY={API_KEY} API_URL={API_URL}/>} />
        <Route path="/person/:id" element={<PersonDetails API_KEY={API_KEY} API_URL={API_URL}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
