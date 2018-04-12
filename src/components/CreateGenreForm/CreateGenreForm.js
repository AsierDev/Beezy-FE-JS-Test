import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import Button from './../Button/Button'
import booksApi from './../../data'
import './CreateGenreForm.css'
import swal from 'sweetalert2'


class CreateGenreForm extends Component {

    constructor() {
        super()

        this.state = {
            genre: ''
        }
    }


    handleSubmit = e => {
        e.preventDefault()
        const { genre } = this.state

        booksApi.createGenre(genre.trim().toLowerCase())

        this.setState({ genre: '' })

        swal({
            title: 'Genre created!',
            showConfirmButton: true,
            timer: 1500
        })

        this.props.history.push('/') 
    }

    handleInput = e => {
        const _genre = e.target.value
        this.setState({
            genre: _genre
        })
    }


    render() {

        return (

            <form
                onSubmit={e => this.handleSubmit(e) }
                className="create-genre"
            >

                <div className="columns is-centered is-mobile" >

                    <div className="field column is-4-desktop is-7-tablet is-9-mobile ">

                        <label className="label has-text-centered is-size-5">
                            Genre
                        </label>

                        <div className="control">
                            <input
                                onChange={e => this.handleInput(e)}
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

export default withRouter(CreateGenreForm)