module.exports = {

    addBook(title, genre, price) {

        function Book(title, genre, price) {

            this.title = title,
            this.genre = genre,
            this.price = price
        }

        let book = new Book(title, genre, price)

        this.bookshelf.push(book)

        console.log(this.bookshelf)

    },

    deleteBook(title) {
        this.bookshelf = this.bookshelf.filter(function (book) {
            return book.title !== title
        })

    },

    editBook(title, genre, price) {
        let library = this.bookshelf
        library.forEach(function (item, index) {
            if (item.title === title) {
                library[index].title = title
                library[index].genre = genre
                library[index].price = price
            }
        })
        this.bookshelf = library
        return this.bookshelf
    },

    bookshelf: [
        {
            title: "Clean Code",
            genre: "Development",
            price: "23"
        },
        {
            title: "Cosmos",
            genre: "Science",
            price: "27"
        },
        {
            title: "Lord Of The Rings",
            genre: "Fantasy",
            price: "18"
        }
    ]
}    

