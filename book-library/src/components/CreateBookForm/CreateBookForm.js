import React, { Component } from 'react';


import './CreateBookForm.css'


class CreateBookForm extends Component {

    constructor() {
        super()

        this.state = {

        }
    }



    render() {
        return (

            <form className="create-book">

                <div className="columns is-centered columns-container" >

                    <div className="field column is-3">
                        <label className="label has-text-centered is-size-5">
                            Title
                        </label>

                        <div className="control">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Text input" 
                            />
                        </div>
                    </div>

                    <div className="field column is-3">
                        <label className="label has-text-centered is-size-5" >
                            Genre
                        </label>

                        <div className="control ">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="Text input" 
                            />
                        </div>
                    </div>

                    <div className="field column is-3">
                        <label className="label has-text-centered is-size-5">
                            Price
                        </label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" />
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