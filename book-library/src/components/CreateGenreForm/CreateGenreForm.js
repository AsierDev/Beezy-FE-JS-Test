import React, { Component } from 'react';


import './CreateGenreForm.css'


class CreateGenreForm extends Component {

    constructor() {
        super()

        this.state = {
            genre: ''
        }
    }


    handleSubmit = () => {
        console.log(this.state.genre.trim())
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

                <div className="control columns is-centered button-create is-mobile">
                    <button className="button is-primary is-medium">
                        Create
                    </button>
                </div>

            </form>
        )
    }
}

export default CreateGenreForm