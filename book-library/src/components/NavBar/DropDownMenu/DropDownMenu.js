import React, { Component } from 'react';
/* import { withRouter } from "react-router-dom" */

import './DropDownMenu.css'


class DropDownMenu extends Component {

    constructor() {
        super()

        this.state = {

        }
    }

   

    render() {
        return (


            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button 
                        className="button" 
                        aria-haspopup="true" 
                        aria-controls="dropdown-menu4"
                    >
                        <span className="dropdownTitle"> 
                            Filter by Genre 
                        </span>
                        <span className="icon is-small">
                            <i 
                                className="fa fa-angle-down dropdownTitle" 
                                aria-hidden="true" 
                            />
                        </span>
                    </button>
                </div>

                <div 
                    className="dropdown-menu" 
                    id="dropdown-menu4" 
                    role="menu"
                >
                    <div className="dropdown-content">
                        <div className="dropdown-item">

                            <ul className="menu-list is-size-5-desktop has-text-weight-normal">
                                <li>
                                    <a className=""
                                        data="history"
                                        onClick={e => {
                                            e.preventDefault()
                                            this.handleClick((e.target.getAttribute('data')))

                                        }}
                                    >
                                        Historia
                                    </a>
                                </li>

                                <li>
                                    <a
                                        data="science"
                                        onClick={e => {
                                            e.preventDefault()
                                            this.handleClick((e.target.getAttribute('data')))
                                        }}
                                    >
                                        Ciencia
                                    </a>
                                </li>

                                <li>
                                    <a
                                        data="fiction"
                                        onClick={e => {
                                            e.preventDefault()
                                            this.handleClick((e.target.getAttribute('data')))
                                        }}
                                    >
                                        Ficción
                                    </a>
                                </li>
                                <li>
                                    <a
                                        data="fantasy"
                                        onClick={e => {
                                            e.preventDefault()
                                            this.handleClick((e.target.getAttribute('data')))
                                        }}
                                    >
                                        Fantasía
                                    </a>
                                </li>

                                <li>
                                    <a
                                        data="philosophy"
                                        onClick={e => {
                                            e.preventDefault()
                                            this.handleClick((e.target.getAttribute('data')))
                                        }}
                                    >
                                        Filosofía
                                    </a>
                                </li>

                               

                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropDownMenu