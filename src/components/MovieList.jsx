import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredMovies } from '../features/movies/moviesSlice'

export default function MovieList(){
  const { items, status, error } = useSelector(state => state.movies)
  const filtered = useSelector(selectFilteredMovies)

  if (status === 'loading') return <div>Loading movies...</div>
  if (status === 'failed') return <div>Error: {error}</div>

  return (
    <div>
      <p className="result-summary">{filtered.length} movie{filtered.length === 1 ? '' : 's'} found</p>
      <div className="movies">
        {filtered.length === 0 ? (
          <div className="no-results">No movies match your search. Try a different filter or keyword.</div>
        ) : (
          filtered.map(m => (
            <div className="card" key={m.id}>
              {m.poster && <img src={m.poster} alt={m.title} className="poster" />}
              <div className="card-content">
                <strong>{m.title}</strong>
                <div className="meta">{m.genre} • {m.year} • {m.language} • Rating: {m.rating}</div>
                <p>{m.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
