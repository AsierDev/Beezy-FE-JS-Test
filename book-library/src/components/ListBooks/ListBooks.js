import React, { Component } from 'react';


import './ListBooks.css'


class ListBooks extends Component {

    constructor() {
        super()

        this.state = {

        }
    }



    render() {
        return (

            <section className="container is-fluid list-books">
                <div className="columns is-centered">
                    <div className="column is-one-fifth-desktop is-one-quarter-tablet is-half-mobile">
                        <div className="card">
                            <div className="card-content">
                                <p className="title">
                                    Titulo Libro
                                </p>
                                
                                <p className="subtitle">
                                    Genero Literario
                                </p>
                                <p className="subtitle">
                                    Precio
                                </p>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">
                                    <span>
                                        <a>Edit &nbsp; <i className="fa fa-edit"></i> </a>
                                    </span>
                                </p>
                                <p className="card-footer-item">
                                    <span>
                                        <a>Delete &nbsp; <i className="fa fa-trash"></i> </a>
                                    </span>
                                </p>
                            </footer>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default ListBooks