const books = require('./books')

module.exports = {

    retrieveBooks() { 
        return books.bookshelf
    },

    createBook(title, genre, price) {
        return books.addBook(title, genre, price)
    },

    removeBook(id) {
        return books.deleteBook(id)
    },

    retrieveOneBook(id) {
        return books.retrieveOneBook(id)
    },

    updateBook(id, title, genre, price) {
        return books.editBook(id, title, genre, price)
    }


}
