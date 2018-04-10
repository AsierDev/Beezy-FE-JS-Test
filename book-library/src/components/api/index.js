const books = require('./books')

module.exports = {

    retrieveBooks() {
        
        return books.bookshelf

    },

    createBook(title, genre, price) {
        return books.addBook(title, genre, price)
    },

    removeBook(title) {
        return books.deleteBook(title)
    },

    updateBook(title, genre, price) {
        return books.editBook(title, genre, price)
    }


}
