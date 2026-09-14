import BookCard from "./BookCard";

export default function Booklist({books, onShowDetails}) {
    if (books.length === 0 ) {
        return <p>Nenhum livro no sistema</p>
    }

    return (
        <section className="book-list" aria-label="livros de hoje">
            {books.map((book) => (
                <BookCard
                key={book.id}
                {...book}
                onShowDetails={onShowDetails}
                />

            ))}
        </section>
    );
}