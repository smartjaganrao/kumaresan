import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchMovies as fetchMoviesApi } from '../../api/moviesApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const data = await fetchMoviesApi()
  return data
})

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  filters: { search: '', genre: 'All', year: 'All', language: 'All' }
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch(state, action){ state.filters.search = action.payload }
    ,setGenre(state, action){ state.filters.genre = action.payload }
    ,setYear(state, action){ state.filters.year = action.payload }
    ,setLanguage(state, action){ state.filters.language = action.payload }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => { state.status = 'loading' })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { setSearch, setGenre, setYear, setLanguage } = moviesSlice.actions

export const selectAllMovies = state => state.movies.items
export const selectFilters = state => state.movies.filters

export const selectFilteredMovies = state => {
  const { items, filters } = state.movies
  const q = filters.search.trim().toLowerCase()
  return items.filter(m => {
    if (filters.genre !== 'All' && m.genre !== filters.genre) return false
    if (filters.year !== 'All' && String(m.year) !== String(filters.year)) return false
    if (filters.language !== 'All' && m.language !== filters.language) return false
    if (!q) return true
    return (
      m.title.toLowerCase().includes(q) ||
      (m.description && m.description.toLowerCase().includes(q))
    )
  })
}

export default moviesSlice.reducer
