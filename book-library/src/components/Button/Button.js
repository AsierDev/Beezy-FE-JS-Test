import React, { Component } from 'react';
import './Button.css'

class Button extends Component {


    render() {
        return (
            <div className="control columns is-centered button-create is-mobile">
                <button className="button is-primary is-medium">
                    Create
                    </button>
            </div>
        )
    }
}

export default Button