import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch, setGenre, setYear, setLanguage, selectFilters, selectAllMovies } from '../features/movies/moviesSlice'

export default function SearchBar() {
  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)
  const movies = useSelector(selectAllMovies)

  const genres = ['All', ...Array.from(new Set(movies.map(m => m.genre)))]
  const years = ['All', ...Array.from(new Set(movies.map(m => m.year))).sort((a,b)=>b-a)]
  const languages = ['All', ...Array.from(new Set(movies.map(m => m.language)))]

  return (
    <div className="search">
      <input
        placeholder="Search by title or description"
        value={filters.search}
        onChange={e => dispatch(setSearch(e.target.value))}
      />
      <select value={filters.genre} onChange={e => dispatch(setGenre(e.target.value))}>
        {genres.map(g => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <select value={filters.year} onChange={e => dispatch(setYear(e.target.value))}>
        {years.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
      <select value={filters.language} onChange={e => dispatch(setLanguage(e.target.value))}>
        {languages.map(l => (
          <option key={l} value={l}>{l}</option>
        ))}
      </select>
    </div>
  )
}
