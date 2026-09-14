function handleToggleBook(bookId){
    setBooks((currentBooks) => 
        currentBooks.map((book) => {
            if (book.id === bookId) {
                return { 
                    ...book, 
                    available: 
                    !book.available };
            }
            return book;
        })
    );

}

