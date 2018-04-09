import React, { Component } from 'react';


import './CreateBookForm.css'


class CreateBookForm extends Component {

    constructor() {
        super()

        this.state = {
            title: '',
            genre: '',
            price: ''
        }
    }


    handleSubmit = () => {
        const {title, genre, price} = this.state
        console.log(title, genre, price)
        this.setState({ 
            title: '',
            genre: '',
            price: ''
        })
    }

    handleTitle= _title => {
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
        return (

            <form 
                onSubmit={e => {
                    e.preventDefault()
                    this.handleSubmit()
                }}
                className="create-book">

                <div className="columns is-centered columns-container" >

                    <div className="field column is-3">
                        <label className="label has-text-centered is-size-5">
                            Title
                        </label>

                        <div className="control">
                            <input
                                onChange={e => this.handleTitle(e.target.value)} 
                                className="input" 
                                type="text" 
                                placeholder="Write a title"
                                required 
                            />
                        </div>
                    </div>

                    <div className="field column is-3">
                        <label className="label has-text-centered is-size-5" >
                            Genre
                        </label>

                        <div className="control ">
                            <input
                                onChange={e => this.handleGenre(e.target.value)} 
                                className="input" 
                                type="text" 
                                placeholder="Define the genre"
                                required 
                            />
                        </div>
                    </div>

                    <div className="field column is-3">
                        <label className="label has-text-centered is-size-5">
                            Price
                        </label>
                        <div className="control">
                            <input 
                                onChange={e => this.handlePrice(e.target.value)}
                                className="input" 
                                type="number" 
                                placeholder="How much?"
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

export default CreateBookForm