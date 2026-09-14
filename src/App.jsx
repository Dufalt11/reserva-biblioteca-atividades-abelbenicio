import "./App.css";
import Booklist from "./components/BookList.jsx";
import panel from "./components/panel.jsx";
import { books } from "./data/books.js";

export default function App() {
  const completedCount = books.filter(
    (book) => book.available,).length;

  function handleShowDetails(id) {
    const book = books.find((book) => book.id === id);
    if (book) {
      window.alert(`${book.title} - Meta: ${book.author} - Ano: ${book.year} - Disponibilidade: ${book.available}`);
    }
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
