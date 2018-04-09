import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {

    render() {
        return (
            <footer className="footer is-dark">
                <div className="container">
                    <div className="content has-text-centered">
                        <div>
                            <span className="is-size-5 has-text-light">
                            
                                <a 
                                    href="https://github.com/AsierDev" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    alt="social icons"
                                > 
                                    Made by Asier 
                                </a>
                             
                            </span>

                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer