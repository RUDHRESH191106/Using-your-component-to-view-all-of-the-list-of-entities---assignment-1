// write the book component code here
import React from "react";
import "../App.css"; // Import styles if needed

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <h2>{book.name}</h2>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Author:</strong> {book.author}</p>
    </div>
  );
};

export default BookCard;
