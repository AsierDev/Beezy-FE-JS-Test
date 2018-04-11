import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import Button from './../Button/Button'
import './UpdateBook.css'
import booksApi from './../api/index'



class UpdateBook extends Component {

    constructor() {
        super()

        this.state = {
            book: {},
            title: '',
            genre: '',
            price: '',
        }
    }

    componentDidMount() {
        const data = this.props.onHandleModal
        this.setState({
            book: data[0],
            title: data[0].title,
            genre: data[0].genre,
            price: data[0].price,
        })
    }

    handleSubmit = () => {
        const { title, genre, price } = this.state
        const { id } = this.state.book

        console.log(id, title, genre, price)

        booksApi.updateBook(id, title, genre, price)

        this.setState({
            title: '',
            genre: '',
            price: ''
        })
        this.props.onSubmit()
    }

    handleTitle = _title => {
        this.setState({
            title: _title
        })
    }

    handleGenre = _genre => {
        this.setState({
            genre: _genre
        })
    }

    handlePrice = _price => {
        this.setState({
            price: _price
        })
    }


    render() {

        const { book } = this.state

        return (

            <form
                onSubmit={e => {
                    e.preventDefault()
                    this.handleSubmit()
                }}
                className="create-book">

                <div className="is-centered columns-container" >

                    <div className="field ">
                        <label className="label has-text-centered is-size-5">
                            Title
                        </label>

                        <div className="control">
                            <input
                                onChange={e => this.handleTitle(e.target.value)}
                                className="input has-text-centered"
                                type="text"
                                placeholder="Write a title"
                                key={book.title}
                                defaultValue={book.title}
                                required
                            />
                        </div>
                    </div>

                    <div className="field ">
                        <label className="label has-text-centered is-size-5" >
                            Genre
                        </label>

                        <div className="control ">
                            <input
                                onChange={e => this.handleGenre(e.target.value)}
                                className="input has-text-centered"
                                type="text"
                                placeholder="Define the genre"
                                key={book.genre}
                                defaultValue={book.genre}
                                required
                            />
                        </div>
                    </div>

                    <div className="field ">
                        <label className="label has-text-centered is-size-5">
                            Price
                        </label>
                        <div className="control">
                            <input
                                onChange={e => this.handlePrice(e.target.value)}
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

export default withRouter(UpdateBook)