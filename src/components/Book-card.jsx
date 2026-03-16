function BookCard({ book, onDelete, onOpen }) {
  return (
    <div className="book-card" onClick={() => onOpen(book)}>
      {book.cover
        ? <img src={book.cover} alt={book.title} />
        : <div className="no-cover">No Cover</div>
      }
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <p className="year">{book.year}</p>
      </div>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation()
          onDelete(book.id)
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default BookCard