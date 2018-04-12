import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

    constructor() {
        super()

        this.state = {

            burger: false

        }
    }

    handleClick = value => {

        this.props.history.push(`/${value}`) 

    }

    toggleBurger = () => {
        this.setState({ burger: !this.state.burger })
    }

    render() {
        return (
            <nav className="navbar is-dark ">
                <div className="container">
                    <div className="navbar-brand logoNav " >
                        <a
                            className="navbar-item dropdownTitle is-size-4 "
                            href="#/"
                        >
                            My Library
                        </a>

                        <span
                            className="navbar-burger burger has-text-light"
                            data-target="navbarMenuHeroA"
                            onClick={e => {
                                e.preventDefault()
                                this.toggleBurger()
                            }}
                        >

                            <span />
                            <span />
                            <span />
                        </span>

                    </div>

                    <div className={this.state.burger ? "navbar-menu has-text-centered is-active" : "navbar-menu has-text-centered "} >
                        <div className="navbar-end ">
                            <a
                                data="book"
                                onClick={e => {
                                    e.preventDefault()
                                    this.handleClick((e.target.getAttribute('data')))

                                }}
                                className="navbar-item has-text-white"
                            >
                                Create Book
                            </a>

                            <a
                                data="genre"
                                onClick={e => {
                                    e.preventDefault()
                                    this.handleClick((e.target.getAttribute('data')))

                                }}
                                className="navbar-item has-text-white"
                            >
                                Create Genre
                            </a>

                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar)