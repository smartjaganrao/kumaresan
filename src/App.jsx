import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from './features/movies/moviesSlice'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <div className="app">
      <h1>Movie Database</h1>
      <p className="subtitle">Browse a curated movie collection with search, genre, year and language filters. Stylish cards make discovery easy and enjoyable.</p>
      <SearchBar />
      <MovieList />
    </div>
  )
}
