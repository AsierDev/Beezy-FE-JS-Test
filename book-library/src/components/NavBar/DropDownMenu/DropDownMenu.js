import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import booksApi from './../../api/index'

import './DropDownMenu.css'


class DropDownMenu extends Component {

    constructor() {
        super()

        this.state = {
            genres: []
        }
    }

    componentDidMount = () => {
        const data = booksApi.retrieveGenres()
        this.setState({
            genres: data
        })

    }

    handleClick = genre => {
        this.props.onHandleClick(genre)
        
    }

    noFilters = () => {
        this.props.onNoFilters()
    }

    render() {

        const { genres } = this.state
        console.log(genres)
        return (

            <div className="dropdown is-hoverable is-right">
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
                                    <a
                                        onClick={e => {
                                            e.preventDefault()
                                            this.noFilters()

                                        }}
                                    >
                                        All
                                    </a>
                                </li>
                                {genres.map( genre => {

                                return <li>
                                        <a 
                                            data={genre.name}
                                            onClick={e => {
                                                e.preventDefault()
                                                this.handleClick((e.target.getAttribute('data')))

                                            }}
                                        >
                                            {genre.name}
                                        </a>
                                    </li>
                                    })
                                }        
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(DropDownMenu)