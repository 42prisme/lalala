class Model {
    constructor() {
        this.api = new BookAPI()
    }

    getBooks(name,handler)
    {
        this.api.getBooks(name,handler)
    }

    getBook(id,handler)
    {
        console.log(id);
        this.api.getBook(id,handler)
    }

}