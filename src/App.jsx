import "./App.css";
import Booklist from "./components/BookList.jsx";
import { books } from "./data/books.js";

export default function App() {
  const completedCount = books.filter(
    (book) => book.available,).length;


  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">BIBLIOTECA ITEAM</p>
        <h1>Reserva de livros do acervo.</h1>
        <p>Consulte a disponibilidade e reserve o que precisar.</p>
        <p>
          {completedCount} de {books.length} Livros Disponiveis
        </p>

        <Booklist books={books} />
      </header>
    </main>
  );
}
