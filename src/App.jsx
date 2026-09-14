
import "./App.css";
import { useState } from "react";

import Booklist from "./components/BookList.jsx";
import Panel from "./components/panel.jsx";
import BookForm from "./components/BookForm.jsx";

import { books as initialBooks } from "./data/books.js";

export default function App() {
  const [books, setBooks] = useState(initialBooks);

  // Conta os livros disponíveis
  const completedCount = books.filter(
    (book) => book.available
  ).length;

  // Adiciona um novo livro
  function handleCreateBook(newBook) {
    setBooks((currentBooks) => [
      ...currentBooks,
      newBook,
    ]);
  }

  // Altera a disponibilidade do livro
  function handleToggleBook(bookId) {
    setBooks((currentBooks) =>
      currentBooks.map((book) => {
        if (book.id === bookId) {
          return {
            ...book,
            available: !book.available,
          };
        }

        return book;
      })
    );
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">
          BIBLIOTECA ITEAM
        </p>

        <h1>
          Reserva de livros do acervo.
        </h1>

        <p>
          Consulte a disponibilidade e reserve o que precisar.
        </p>

        <p>
          {completedCount} de {books.length} Livros Disponíveis
        </p>

        <Panel title="Livros Disponíveis">
          <Booklist
            books={books}
            onToggle={handleToggleBook}
          />
        </Panel>

        <Panel title="Adicionar Livro">
          <BookForm
            onCreateBook={handleCreateBook}
          />
        </Panel>
      </header>
    </main>
  );
}
