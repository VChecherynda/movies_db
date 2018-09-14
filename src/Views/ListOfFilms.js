import React, { Component } from 'react';

import Header from '../Components/Header/Header';
import Cards from '../Containers/Cards';

import './ListOfFilms.css';


class ListOfFilms extends Component {
  componentDidMount() {
    this.props.fetchFilmData();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Cards />
      </div>
    );
  }
}

export default ListOfFilms;
