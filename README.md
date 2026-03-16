# Pocket Flip

A React book discovery app powered by the Open Library API. Search any book in the world, view details and build your reading list.

## Features
- Search millions of books using the Open Library API
- View book covers, author and publish year
- Click any book to see full description and details
- Open Library link to read previews
- Remove books from your search results
- Responsive design — works on mobile and desktop

## Project Structure
```
src/
├── components/
│   ├── Search-bar.jsx   — search input and button
│   ├── Book-list.jsx    — renders the grid of results
│   ├── Book-card.jsx    — individual book card with remove button
│   └── Modal.jsx        — book details popup
├── App.jsx              — main component, holds all state
├── main.jsx             — entry point
└── index.css            — global styles
```

## APIs Used
- **Search API** — `https://openlibrary.org/search.json?q={query}`
- **Works API** — `https://openlibrary.org/works/{id}.json`
- **Covers API** — `https://covers.openlibrary.org/b/id/{cover_id}-M.jpg`


## What I Learned
- Component-based architecture in React
- Passing props between parent and child components
- useState hook for managing application state
- Fetching data from a real API using async/await
- Event handling in React
- Conditional rendering

## Author
Lenny Gitonga