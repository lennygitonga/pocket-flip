import { useState } from 'react'

function SearchBar({ onSearch }) {

  const [query, setQuery] = useState('')

  function handleSearch() {
    if (query.trim() === '') return
    onSearch(query)
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar