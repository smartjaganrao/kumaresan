# Movie Database Mini (React + Redux Toolkit)

Small demo app that fetches mock movie data and allows searching and filtering by genre and year.

Quick start

```bash
npm install
npm run dev
```

Features
- React + Vite
- Redux Toolkit for state and async fetch
- Mock API (local) with delayed response
- Search by title/description, filter by genre and year
- Poster images displayed for each movie (remote placeholders)
- Filter by language (English, Tamil, Korean examples)

Files of interest
- `src/features/movies/moviesSlice.js` - Redux slice and selectors
- `src/api/moviesApi.js` - mock data API
- `src/components/SearchBar.jsx` - inputs for filters
- `src/components/MovieList.jsx` - results and UI
# kumaresan
# kumaresan