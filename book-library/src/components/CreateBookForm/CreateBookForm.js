import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import Button from './../Button/Button'
import './CreateBookForm.css'
import booksApi from './../../data'
import swal from 'sweetalert2'


class CreateBookForm extends Component {

    constructor() {
        super()

        this.state = {
            genres: [],
            title: '',
            genre: '',
            price: ''
        }
    }

    componentDidMount() {
        const data = booksApi.retrieveGenres()

        this.setState({
            genres:data
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {title, genre, price} = this.state
        
        booksApi.createBook(title.trim().toLowerCase(), genre.trim(), price.trim().toLowerCase())
        
        this.setState({ 
            title: '',
            genre: '',
            price: ''
        })

        swal({
            title: 'Book created!',
            showConfirmButton: true,
            timer: 1500
        })

        this.props.history.push('/')
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

        const { genres } = this.state

        return (

            <form 
                onSubmit={e => this.handleSubmit(e)}
                className="create-book"
            >

                <div className="columns is-centered columns-container" >

                    <div className="field column is-3">

                        <label className="label has-text-centered is-size-5">
                            Title
                        </label>

                        <div className="control">
                            <input
                                onChange={e => this.handleTitle(e)} 
                                className="input" 
                                type="text" 
                                placeholder="Write a title"
                                required 
                            />
                        </div>

                    </div>

                    <div className="control column is-3 is-centered">

                        <label className="label has-text-centered is-size-5" >
                            Genre
                        </label>

                        <div className="input input-select">
                            <div className="select">
                                <select onChange={e => this.handleGenre(e)}>
                                    <option selected="true" disabled="disabled">
                                        Choose Genre
                                    </option>
                                    { 
                                        genres.map( genre => {                                           
                                            return <option key={genre.id}> {genre.name} </option>
                                        })
                                    }                                    
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="field column is-3">
                        <label className="label has-text-centered is-size-5">
                            Price
                        </label>

                        <div className="control">
                            <input 
                                onChange={e => this.handlePrice(e)}
                                className="input" 
                                type="number" 
                                placeholder="How much?"
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

export default withRouter(CreateBookForm)