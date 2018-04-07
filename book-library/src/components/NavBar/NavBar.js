import React, { Component } from 'react';


import './NavBar.css'


class NavBar extends Component {

    constructor() {
        super()

        this.state = {

            burger: false

        }
    }


  
    toggleBurger = () => {
        this.setState({ burger: !this.state.burger })
    }

    render() {
        return (
            <nav className="navbar is-dark ">
                <div className="container">
                    <div className="navbar-brand logoNav " >
                        <a className="navbar-item dropdownTitle is-size-4 " href="#/browse">
                            My Library
                        </a>

                        <span
                            className="navbar-burger burger has-text-light"
                            data-target="navbarMenuHeroA"
                            onClick={
                                e => {
                                    e.preventDefault()
                                    this.toggleBurger()
                                }}>
                            <span />
                            <span />
                            <span />
                        </span>

                    </div>

                    <div className={this.state.burger ? "navbar-menu has-text-centered is-active" : "navbar-menu has-text-centered "} >
                        <div className="navbar-end ">
                            <a className="navbar-item has-text-white"> Books </a>
                            <a className="navbar-item has-text-white"> Genres </a>


                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar