import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Header from './components/Header';
import './App.css'
import SearchBar from './components/SearchBar';

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchMovie, setSearchMovie] = useState('')

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?apikey=686c6e78&s=${searchMovie}`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchMovie)
  }, [searchMovie])


  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Header heading='Bibliothèque de films'/>
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>
      </div>
      <div className='row'>
        <MovieList movies={movies} />
      </div>   
    </div>
  );
};

export default App;
