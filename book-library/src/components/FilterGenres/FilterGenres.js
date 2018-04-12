import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import booksApi from './../../data'

import './FilterGenres.css'


class FilterGenres extends Component {

    constructor() {
        super()

        this.state = {
            genres: [],
            genre: "no filters"
        }
    }

    componentDidMount(){
        const data = booksApi.retrieveGenres()

        this.setState({
            genres: data
        })
    }

    handleFilters = e => {
        e.preventDefault()
        const _genre = e.target.getAttribute('data')

        this.props.onHandleClick(_genre)

        this.setState({
            genre: _genre
        })      
    }

    noFilters = e => {
        e.preventDefault()
        this.props.onNoFilters()

        this.setState({
            genre: "no filters"
        })
    }

    render() {
        const { genres } = this.state

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
                            <i className="fa fa-angle-down dropdownTitle" aria-hidden="true" />
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
                                    <a onClick={e => this.noFilters(e)} >
                                        no filters
                                    </a>
                                </li>
                                {
                                    genres.map( genre => {

                                    return <li key={genre.id}>
                                                <a 
                                                    data={genre.name}
                                                    onClick={e => this.handleFilters(e) }  
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