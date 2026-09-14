export default function BookCard({id, title, author, year, available, onToggle, }) {
    return(
        <article className={`book-card ${available ? "is-complete" : ""}`}>
            <div>
                <h2>{title}</h2>
                <p>Autor: {author}</p>
                <p>Ano de lançamento: {year}</p>
                <p>Disponibilidade: {available ? "Disponível" : "Indisponível"}</p>
            </div> 

            <button onClick={() => onToggle(id)} className="button">
                {available ? "Reservar" : "Ver Detalhes"}
            </button>
        </article>
    );
    
}