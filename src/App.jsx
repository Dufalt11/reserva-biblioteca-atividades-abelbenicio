import "./App.css";
import Booklist from "./components/BookList.jsx";
import panel from "./components/panel.jsx";
import { books } from "./data/books.js";
import { useState } from "react";
import BookCard from "./components/BookCard.jsx";
import BookForm from "./components/BookForm.jsx";

export default function App() {
  const [books, setCompletedBooks] = useState([]);

  const completedCount = books.filter(
    (book) => book.available,).length;

  function handleToggleBook(bookId) {
    setCompletedBooks((currentBooks) => 
      currentBooks.map((book) => {
        if (book.id === bookId) {
          return { ...book, available: !book.available };
        }
        return book;
      })
    );
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        <p>
          {completedCount} de {books.length} Livros Disponiveis
        </p>

        <panel title="Livros Disponíveis">
          <Booklist books={books} onShowDetails={handleShowDetails} />
        </panel>
      </header>
    </main>
  );
}
