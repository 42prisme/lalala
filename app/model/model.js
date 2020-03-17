class Model {
    constructor() {
        this.api = new BookAPI()
    }

    getBooks(name,handler){this.api.getBooks(name,handler)}
}