# Movie Database Mini (React + Redux Toolkit)

A small movie search and filter app built with React, Vite, and Redux Toolkit. It uses mock movie data and allows searching by title/description plus filtering by genre, year, and language.

## Quick start

```bash
npm install
npm run dev
```

Open the app at `http://localhost:5173`.

## Production build

```bash
npm run build
```

## Features

- React + Vite frontend
- Redux Toolkit state management
- Async mock API data fetch
- Search by title or description
- Filters: genre, year, language
- Movie poster cards with ratings and metadata

## Project structure

- `src/main.jsx` — app root and Redux provider
- `src/App.jsx` — top-level layout and initial data fetch
- `src/app/store.js` — Redux store configuration
- `src/features/movies/moviesSlice.js` — movie state, async fetch, filters, selectors
- `src/api/moviesApi.js` — mock movie data API
- `src/components/SearchBar.jsx` — filter controls UI
- `src/components/MovieList.jsx` — filtered movie list UI
- `src/index.css` — app styling and theme

## Notes

- The mock API uses local sample data and a short delay to simulate network loading.
- `src/components/SearchBar.jsx` reads current filter values and updates them through Redux actions.
- `src/components/MovieList.jsx` renders matching movie cards and handles loading / error states.
