
import { useState } from "react";

export default function BookForm({ onCreateBook }) {
  const [error, setError] = useState("");

  function handleCreateBook(event) {
    event.preventDefault();

    const title = event.target.title.value.trim();
    const author = event.target.author.value.trim();
    const year = event.target.year.value.trim();
    const available = event.target.available.checked;

    // Verifica se os campos obrigatórios foram preenchidos
    if (!title || !author || !year) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    // Cria o novo livro
    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      year,
      available,
    };

    // Envia o livro para o App.jsx
    onCreateBook(newBook);

    // Limpa a mensagem de erro
    setError("");

    // Limpa o formulário
    event.target.reset();
  }

  return (
    <form
      className="book-form"
      onSubmit={handleCreateBook}
    >
      <div className="form-group">
        <label htmlFor="title">
          Título:
        </label>

        <input
          type="text"
          id="title"
          name="title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">
          Autor:
        </label>

        <input
          type="text"
          id="author"
          name="author"
        />
      </div>

      <div className="form-group">
        <label htmlFor="year">
          Ano:
        </label>

        <input
          type="text"
          id="year"
          name="year"
        />
      </div>

      <div className="form-group">
        <label htmlFor="available">
          Disponível:
        </label>

        <input
          type="checkbox"
          id="available"
          name="available"
          defaultChecked
        />
      </div>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      <button type="submit">
        Adicionar Livro
      </button>
    </form>
  );
}
