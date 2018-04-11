module.exports = {

    addBook(title, genre, price) {
        
        let bookId = 'id' + (new Date()).getTime();

        function Book(id, title, genre, price) {

            this.id = id;
            this.title = title;
            this.genre = genre;
            this.price = price;
        }

        let book = new Book(bookId,title, genre, price)
        
        this.bookshelf.push(book)


        console.log(this.bookshelf)

    },

    deleteBook(id) {
        this.bookshelf = this.bookshelf.filter(function (book) {
            return book.id !== id
        })

    },

    retrieveOneBook(id) {
        const book = this.bookshelf.filter(function (book) {
            return book.id === id
        })
        return book
    },

    editBook(id, title, genre, price) {
        let library = this.bookshelf
        library.forEach(function (item, index) {
            if (item.id === id) {
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
            id: "101",
            title: "Clean Code",
            genre: "Development",
            price: "23"
        },
        {
            id: "102",
            title: "Cosmos",
            genre: "Science",
            price: "27"
        },
        {
            id: "103",
            title: "Lord Of The Rings",
            genre: "Fantasy",
            price: "18"
        }
    ]
}    

