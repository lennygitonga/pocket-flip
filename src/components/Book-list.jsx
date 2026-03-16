import BookCard from './Book-card'

function BookList({ books, onDelete, onOpen }) {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <p>Search for a book to get started</p>
      </div>
    )
  }

  return (
    <div className="book-grid">
      {books.map(book => (
        <BookCard
          key={book.id}
          book={book}
          onDelete={onDelete}
          onOpen={onOpen}
        />
      ))}
    </div>
  )
}

export default BookList