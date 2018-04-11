import React, { Component } from 'react';
import Button from './../Button/Button'
import booksApi from './../../api/index'
import './CreateGenreForm.css'


class CreateGenreForm extends Component {

    constructor() {
        super()

        this.state = {
            genre: ''
        }
    }


    handleSubmit = () => {
        const { genre } = this.state

        booksApi.createGenre(genre.trim().toLowerCase())

        this.setState({ genre: '' })
    }

    handleInput = _genre => {

        this.setState({
            genre: _genre
        })
    }


    render() {

        return (

            <form
                onSubmit={e => {
                    e.preventDefault()
                    this.handleSubmit()
                }}
                className="create-genre"
            >

                <div className="columns is-centered is-mobile" >

                    <div className="field column is-4-desktop is-7-tablet is-9-mobile ">
                        <label className="label has-text-centered is-size-5">
                            Genre
                        </label>
                        <div className="control">
                            <input
                                onChange={e => this.handleInput(e.target.value)}
                                className="input"
                                type="text"
                                placeholder="Introduce genre"
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

export default CreateGenreForm