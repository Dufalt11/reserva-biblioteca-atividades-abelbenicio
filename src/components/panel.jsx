export default function panel({ title, children }) {
    return (
        <section className="panel">
            <header>
                <h2>{title}</h2>
            </header>
            <div className="panel-content">{children}</div>
        </section>
    );
}