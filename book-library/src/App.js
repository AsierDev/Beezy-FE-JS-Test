import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CreateBookForm from './components/CreateBookForm/CreateBookForm'
import CreateGenreForm from './components/CreateGenreForm/CreateGenreForm'

class App extends Component {
  render() {
    return (
      <div className="App">

      <NavBar />
       
      <CreateBookForm />
      <CreateGenreForm />

      <Footer />
      </div>

    );
  }
}

export default App;
