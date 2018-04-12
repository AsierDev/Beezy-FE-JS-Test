module.exports= {

    addGenre(name) {

        let genreId = 'id' + (new Date()).getTime();

        function Genre(id, name) {
            this.id = id;
            this.name = name;
        }

        let genre = new Genre(genreId, name)

        this.listOfGenres.push(genre)

    },

    editGenre(id, name) {
        let library = this.listOfGenres

        library.forEach(function (item, index) {
            if (item.id === id) {
                library[index].name = name
            }
        })
        this.listOfGenres = library
        return this.listOfGenres
    },

    deleteGenre(id) {
        this.listOfGenres = this.listOfGenres.filter(function (genre) {
            return genre.id !== id
        })

    },

    listOfGenres : [
        {   
            id: "101",
            name:"science"
        }, 
        {   
            id: "102",
            name: "development"
        }, 
        {
            id: "103",
            name: "fantasy"
        }
    ]



}
