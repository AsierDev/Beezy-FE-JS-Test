import React, { Component } from 'react';

import UpdateBook from './../UpdateBook/UpdateBook'

import booksApi from './../api/index'

import './ListBooks.css'


class ListBooks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books: [],
            modal: false
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
    
    handleDelete = title => {
        booksApi.removeBook(title)
        this.getBooks()
    }

    handleEdit = title => {
        
        console.log(this.props)
        /* booksApi.updateBook(title, "nueva", "1000")
        this.getBooks() */
    }

    handleModal() {

        this.setState({
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

                            return <div className="column is-one-quarter-desktop" key={book.title}>
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
                                                this.handleModal(book.title)
                                            }}>
                                                <a>Edit &nbsp; <i className="fa fa-edit"></i> </a>
                                            </span>
                                        </p>

                                        <p className="card-footer-item">
                                            <span onClick={e => {
                                                e.preventDefault()
                                                this.handleDelete(book.title)
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

                                </header>

                                    <div className="modal-card-body">
                                        <UpdateBook/> 
                                        

                                    </div>

                                    <footer className="modal-card-foot">
                                        <button className="button is-success">Enviar</button>

                                        <button
                                            onClick={e => {
                                                e.preventDefault()
                                                this.handleModal()
                                            }}
                                            className="button"
                                        >Cancel</button>
                                    </footer>

                                

                            </div>
                        </div>
                        : null }
                </div>
            </section>

        )
    }
}

export default ListBooks