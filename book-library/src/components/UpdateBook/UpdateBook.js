import React, { Component } from 'react';
import Button from './../Button/Button'
import './UpdateBook.css'
import booksApi from './../../data'
import swal from 'sweetalert2'

class UpdateBook extends Component {

    constructor() {
        super()

        this.state = {
            book: {},
            title: '',
            genre: '',
            price: '',
            genres: []
        }
    }

    componentDidMount() {
        this.getBook()
        this.getGenres()
    }

    getBook = () => {
        const data = this.props.onHandleModal

        this.setState({
            book: data[0],
            title: data[0].title,
            genre: data[0].genre,
            price: data[0].price,
        })
    }

    getGenres = () => {
        const data = booksApi.retrieveGenres()

        this.setState({ genres: data })
    }

    handleSubmit = e => {
        const { title, genre, price } = this.state
        const { id } = this.state.book

        booksApi.updateBook(id, title, genre, price)

        this.setState({
            title: '',
            genre: '',
            price: ''
        })

        this.props.onSubmit(e)

        swal({
            title: 'Book Updated',
            showConfirmButton: true,
            timer: 1000
        })

    }

    handleTitle = e => {
        const _title = e.target.value

        this.setState({
            title: _title
        })
    }

    handleGenre = e => {
        const _genre = e.target.value

        this.setState({
            genre: _genre
        })
    }

    handlePrice = e => {
        const _price = e.target.value

        this.setState({
            price: _price
        })
    }


    render() {

        const { book, genres } = this.state

        return (

            <form
                onSubmit={e => this.handleSubmit(e)}
                className="create-book"
            >

                <div className="is-centered columns-container" >

                    <div className="field ">
                        <label className="label has-text-centered is-size-5">
                            Title
                        </label>

                        <div className="control">
                            <input
                                onChange={e => this.handleTitle(e)}
                                className="input has-text-centered"
                                type="text"
                                placeholder="Write a title"
                                key={book.title}
                                defaultValue={book.title}
                                required
                            />
                        </div>
                    </div>

                    <div className="control ">

                        <label className="label has-text-centered is-size-5" >
                            Genre
                        </label>

                        <div className="input input-select">
                            <div className="select">
                                <select onChange={e => this.handleGenre(e)}>
                                    <option selected="true" disabled="disabled"> Choose Genre</option>
                                    { 
                                        genres.map( genre => {
                                            return <option key={genre.id}>{genre.name}</option>
                                        })
                                    }
                                    
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="field">

                        <label className="label has-text-centered is-size-5">
                            Price
                        </label>

                        <div className="control">
                            <input
                                onChange={e => this.handlePrice(e)}
                                className="input has-text-centered"
                                type="number"
                                placeholder="How much?"
                                key={book.price}
                                defaultValue={book.price}
                                required
                            />
                        </div>

                    </div>

                </div>
                
                <Button />

            </form>
        )
    }
}

export default UpdateBook