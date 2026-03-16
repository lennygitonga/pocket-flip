import { useState } from 'react'
import SearchBar from './components/Search-bar'
import BookList from './components/Book-list'
import Modal from './components/Modal'
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

  const [selectedBook, setSelectedBook] = useState(null)
const [bookDetails, setBookDetails] = useState(null)

  //DELETE A BOOK
  function deleteBook(id) {
    setBooks(books.filter(book => book.id !== id))
  }

  // open book details function
  async function openBook(book) {
  setSelectedBook(book)
  setBookDetails(null)

  const workId = book.id.replace('/works/', '')
  const response = await fetch(`https://openlibrary.org/works/${workId}.json`)
  const data = await response.json()

  const description = data.description
    ? typeof data.description === 'string'
      ? data.description
      : data.description.value
    : 'No description available.'

  setBookDetails({ description })
}

function closeBook() {
  setSelectedBook(null)
  setBookDetails(null)
}

  
  return (
    <div className="app">
      <h1>Pocket Flip</h1>
      <p className="subtitle">Search any book in the world</p>
      <SearchBar onSearch={searchBooks} />
      {loading && <p className="loading">Searching...</p>}
      <BookList books={books} onDelete={deleteBook} onOpen={openBook} />
      {selectedBook && (
        <Modal 
        book={selectedBook}
        details={bookDetails}
        onClose={closeBook}
        />
      )}

    </div>
  )
}

export default App