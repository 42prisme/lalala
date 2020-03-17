/*class BookAPI
{
    getBooks(handler, bookname)
    {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookname}`)
            .then(response => response.json())
            .then(json => handler(json))
    }

    getBook(bookId, handler)
     {
         fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookId}`)
             .then(response => response.json())
             .then(books => {
                 if(books.length > 0 ){
                     handler(books[0])
                 }
             })
     }
}*/