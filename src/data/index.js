const books = require('./books')
const genres = require('./genres')

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
    },
    
    listBooksByGenre(genre) {
        return books.listBooksByGenre(genre)
    },

    retrieveGenres() {
        return genres.listOfGenres
    },

    createGenre(name) {
        return genres.addGenre(name)
    },

    updateGenre(id, name) {
        return genres.editGenre(id, name)
    },

    removeGenre(id) {
        return genres.deleteGenre(id)
    }


}
