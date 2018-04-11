import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import booksApi from './../../api/index'

import './FilterGenres.css'


class FilterGenres extends Component {

    constructor() {
        super()

        this.state = {
            genres: [],
            genre: "no filters"
        }
    }

    componentDidMount = () => {
        const data = booksApi.retrieveGenres()
        this.setState({
            genres: data
        })

    }

    handleClick = _genre => {
        this.props.onHandleClick(_genre)
        this.setState({
            genre: _genre
        })
        
    }

    noFilters = () => {
        this.props.onNoFilters()
        this.setState({
            genre: "no filters"
        })
    }

    render() {

        const { genres } = this.state
        console.log(genres)
        return (

            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button
                        className="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                    >
                        <span className="dropdownTitle">
                            {this.state.genre}
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
                    role="menu"
                >
                    <div className="dropdown-content">
                        <div className="dropdown-item dropdown-body">

                            <ul className="menu-list is-size-5-desktop has-text-weight-normal">
                                <li>
                                    <a
                                        onClick={e => {
                                            e.preventDefault()
                                            this.noFilters()

                                        }}
                                    >
                                        no filters
                                    </a>
                                </li>
                                {genres.map( genre => {

                                return <li key={genre.id}>
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

export default withRouter(FilterGenres)