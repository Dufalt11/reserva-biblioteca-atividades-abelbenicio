export default function BookCard({id, title, author, year, available}) {
    return(
        <article className={`book-card ${available ? "is-complete" : ""}`}>
            <div>
                <h2>{title}</h2>
                <p>Autor: {author}</p>
                <p>Ano de lançamento: {year}</p>
            </div> 

            <span className={`badge ${available ? "badge-ok" : "badge-off"}`}>
                {available ? "Disponível" : "Reservado"}
            </span>
        </article>
    );
    
}