import React, { Component } from 'react';


import './CreateGenreForm.css'


class CreateGenreForm extends Component {

    constructor() {
        super()

        this.state = {

        }
    }

  

    render() {
        return (

            <form className="create-genre">
            
            <div className="columns is-centered is-mobile" >

                <div className="field column is-4-desktop is-7-tablet is-9-mobile ">
                    <label className="label has-text-centered is-size-5">Genre</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" />
                    </div>
                </div>

            </div>

            <div className="control columns is-centered button-create is-mobile">
                <button className="button is-primary is-medium">Create</button>
            </div>

            </form>
        )
    }
}

export default CreateGenreForm