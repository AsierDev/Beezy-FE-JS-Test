import React, { Component } from 'react';

import libraryData from './../api/index'
import dummyData from '../api/dummyData'




import './ListBooks.css'


class ListBooks extends Component {

    constructor() {
        super()

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        const data = dummyData.retrieveBooks()
        console.log(data)
        this.setState({
            books: data.books
        })   
    }



    render() {

        const {books} = this.state
        console.log(books)
        return (

            <section className="container is-fluid list-books">
                <div className="columns is-centered">

                    { books.length > 0 ? 
                    
                        books.map(book => {

                            return <div className="column is-one-quarter-desktop is-half-tablet" key={book.title}>
                                <div className="card">
                                    <div className="card-content">
                                        <p className="title">
                                            {book.title}
                                        </p>
                                        <p className="subtitle">
                                            {book.genre}
                                        </p>
                                        <p className="subtitle has-text-centered price">
                                            {book.price}€
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
                    })
                        : null
                }
                    
                </div>
            </section>

        )
    }
}

export default ListBooks