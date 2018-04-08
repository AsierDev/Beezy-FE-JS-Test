import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.css';
import 'bulma/css/bulma.css'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import CreateBookForm from './components/CreateBookForm/CreateBookForm'
import CreateGenreForm from './components/CreateGenreForm/CreateGenreForm'
import ListBooks from './components/ListBooks/ListBooks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>

          <div>

            <NavBar />
            
            <Route exact path="/book" render={() => (
              <CreateBookForm />
            )} />

            <Route exact path="/genre" render={() => (
              <CreateGenreForm />
            )} />
          
            <ListBooks />

            <Footer />

          </div>  

        </HashRouter>  
      </div>

    );
  }
}

export default App;
