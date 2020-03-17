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
            let content = ''
            console.log(books.items);
            for (const book of books.items){
                content += '<tr><td><a href="#" onclick="indexController.DisplayBookImage(`$(book.id)`)">book.volumeInfo.title</a></td>' +
                    '<td>${book.description}</td>' +
                    '<td><a class="btn" onclick="indexController.OpenBookImage(`$book.id `)"><i></a></td>'
            }
            $(`#booksTable`).innerHTML = content
        })
    }
}

window.indexController = new IndexController();
