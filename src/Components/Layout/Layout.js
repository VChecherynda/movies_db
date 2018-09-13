import React, { Component } from 'react';

import Header from '../Header/Header';
import Card from '../Card/Card';

import './Layout.css';


class Layout extends Component {
  componentDidMount() {
    this.props.fetchFilmData();
  }

  render() {

    let cards = null;

    if(this.props.films.films.results) {
      cards = this.props.films.films.results.map((movie, index) => {
        return <Card {...movie} />
      });
    }

    return (
      <div className="App">
        <Header />
        {cards}
      </div>
    );
  }
}

export default Layout;
