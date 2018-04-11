import React, { Component } from 'react';

import UpdateBook from './../UpdateBook/UpdateBook'

import booksApi from './../api/index'

import './ListBooks.css'


class ListBooks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books: [],
            modal: false,
            book: []
        }
    }

    componentDidMount() {
       this.getBooks()
    }

    
    getBooks = () => {
        const data = booksApi.retrieveBooks()
        this.setState({
            books: data
        })
    }
    
    handleDelete = id => {
        booksApi.removeBook(id)
        this.getBooks()
    }

    handleModal = id => {

       const data = booksApi.retrieveOneBook(id)
        this.setState({
            book: data,
            modal: !this.state.modal
        })
    }

    render() {

        const { books } = this.state
        console.log(books)
        return (

            <section className="container is-fluid list-books">
                <div className="columns is-centered is-multiline">

                    {books.length > 0 ?

                        books.map(book => {

                            return <div className="column is-one-quarter-desktop" key={book.id}>
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
                                            <span onClick={e => {
                                                e.preventDefault()
                                                this.handleModal(book.id)
                                            }}>
                                                <a>Edit &nbsp; <i className="fa fa-edit"></i> </a>
                                            </span>
                                        </p>

                                        <p className="card-footer-item">
                                            <span onClick={e => {
                                                e.preventDefault()
                                                this.handleDelete(book.id)
                                            }}>
                                                <a>Delete &nbsp; <i className="fa fa-trash"></i> </a>
                                            </span>
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        })
                        : null
                    }
                    {this.state.modal ?
                        <div className="modal is-active">
                            <div className="modal-background" />
                            <div className="modal-card">

                                <header className="modal-card-head">
                                    <p className="modal-card-title">Edit Book </p>
                                    <button 
                                        className="delete" 
                                        aria-label="close"
                                        onClick={e => {
                                                e.preventDefault()
                                                this.handleModal()
                                            }}
                                    >
                                    </button>

                                </header>

                                <div className="modal-card-body">
                                    <UpdateBook 
                                        onHandleModal={this.state.book}
                                        onSubmit= {this.handleModal} 
                                    /> 
                                    

                                </div>
                            </div>
                        </div>
                        : null }
                </div>
            </section>

        )
    }
}

export default ListBooks