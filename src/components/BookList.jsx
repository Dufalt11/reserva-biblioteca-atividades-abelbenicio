
import BookCard from "./BookCard";

export default function Booklist({ books = [], onToggle }) {
  if (books.length === 0) {
    return <p>Nenhum livro no sistema.</p>;
  }

  return (
    <section
      className="book-list"
      aria-label="Livros do sistema"
    >
      {books.map((book) => (
        <BookCard
          key={book.id}
          {...book}
          onToggle={onToggle}
        />
      ))}
    </section>
  );
}

