class IndexController extends BaseController {
    constructor() {
        super();
        //this.MakeJsonList("https://www.googleapis.com/books/v1/volumes?q=wind")
        this.DisplayBooks("wind")
    }

    DisplayBookImage(bookId)
    {
        $(`#bookImageModalImage`).src = "#"
        //this.model.getBook(bookId, bookId)
    }

    OpenBookImage(bookId)
    {}

    DisplayBooks(name)
    {
        this.model.getBooks(name, books => {
            let content = '';
            console.log(books.items);
            for (const book of books.items){
                content += '<tr><td><a href="#" onclick="indexController.DisplayBookImage(`$(book.volumeInfo.imageLinks.thumbnail)`)">${book.volumeInfo.title}</a></td>' +
                    '<td>${book.volumeInfo.description}</td>' +
                    '<a class="btn" onclick="indexController.OpenBookImage(`$book.id `)"></tr>'
            }
            document.getElementById("booksTable").innerHTML = content
        })
    }
}

window.indexController = new IndexController();
