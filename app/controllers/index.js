class IndexController extends BaseController {
    constructor() {
        super();
        //this.MakeJsonList("https://www.googleapis.com/books/v1/volumes?q=wind")
        this.DisplayBooks()
    }

    DisplayBookImage(bookId, imglink)
    {
        if (imglink !== undefined)
        {
            this.model.getBook(bookId, volume => {
                //console.log(volume);
                document.getElementById("book_title").innerText = volume.volumeInfo.title;
                document.getElementById("book_img").src = volume.volumeInfo.imageLinks.thumbnail
                this.getModal('#volumeImageModal').open()
            })
        }
    }

    DisplayBooks()
    {
        const keyword = document.getElementById("keyword").value;
        if (keyword.length !== 0) {
            this.model.getBooks(keyword, books => {
                document.getElementById("booksTable").innerHTML = ""
                let content = '';
                for (const book of books.items) {
                    let newRow = document.querySelector('table').insertRow(-1);
                    let newCell = newRow.insertCell(0);
                    newCell.innerHTML = `<a class="nameBook" onclick="indexController.DisplayBookImage('${book.id}', '${book.volumeInfo.imageLinks.thumbnail}')">${book.volumeInfo.title}</a>`;
                    newCell = newRow.insertCell(1);
                    newCell.innerHTML = book.volumeInfo.description;
                }
                document.getElementById("booksTable").innerHTML = content

            })
        }
    }
}

window.indexController = new IndexController();
