import React from 'react';

import Card from './Card/Card';

const cards = (props) => {
  let cards = null;

  return cards = props.films.favourite.results.map((movie, index) => {
      return <Card key={'movie-' + index} {...movie} />
  });

}

export default cards;