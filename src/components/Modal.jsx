function Modal({ book, details, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-content">
          <div className="modal-left">
            {book.cover
              ? <img src={book.cover} alt={book.title} />
              : <div className="no-cover">No Cover</div>
            }
          </div>

          <div className="modal-right">
            <h2>{book.title}</h2>
            <p className="modal-author">{book.author}</p>
            <p className="modal-year">First published: {book.year}</p>

            <div className="modal-description">
              {details
                ? <p>{details.description}</p>
                : <p className="loading">Loading details...</p>
              }
            </div>

            <a
              href={`https://openlibrary.org${book.id}`}
              target="_blank"
              rel="noreferrer"
              className="read-btn"
            >
              View on Open Library →
            </a>

          </div>
        </div>

      </div>
    </div >
  )
}

export default Modal