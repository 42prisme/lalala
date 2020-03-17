class BookAPI {
    getBooks(bookname, handler)
    {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookname}`)
            .then(response => response.json())
            .then(json => handler(json))
    }
}