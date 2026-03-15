import { useState } from 'react'
import SearchBar from './components/Search-bar'
import BookList from './components/Book-list'
import './index.css'

function App() {

  //STATE-more of local storage for the app, holds the data that changes over time.
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  //FETCH BOOKS — fetches data from open library api.
  async function searchBooks(query) {
    setLoading(true)
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=12`)
    const data = await response.json()

    const results = data.docs.map(book => ({
      id: book.key,
      title: book.title,
      author: book.author_name?.[0] || 'Unknown Author',
      year: book.first_publish_year || 'N/A',
      cover: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : null
    }))

    setBooks(results)
    setLoading(false)
  }

  //DELETE A BOOK
  function deleteBook(id) {
    setBooks(books.filter(book => book.id !== id))
  }

  
  return (
    <div className="app">
      <h1>Pocket Flip</h1>
      <p className="subtitle">Search any book in the world</p>
      <SearchBar onSearch={searchBooks} />
      {loading && <p className="loading">Searching...</p>}
      <BookList books={books} onDelete={deleteBook} />
    </div>
  )
}

export default App