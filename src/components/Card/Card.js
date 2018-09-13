import React from 'react';

import classes from './Card.css';

const card = (props) => {

  console.log('Card', props);

  return (
    <div className={classes.Card}>
      <div className={classes.ImageContent}>
        <a href="">
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`} alt="film logo" />
        </a>
      </div>

      <div className={classes.InfoContent}>

        <div className={classes.FilmHeader}>
          <div className={classes.FilmRating}>{props.vote_average * 10}%</div>

          <div className={classes.FilmTitle}>
            <span className={classes.FilmTitleName}>{props.title}</span>
            <span className={classes.FilmDateAppearence}>{props.release_date}</span>
          </div>
        </div>

        <div className={classes.FilmOverview}>
          <p>{props.overview}</p>
        </div>

        <div className={classes.MoreInfo}>
          <a hrer="">More info</a>
        </div>

      </div>
    </div>
  )
}

export default card;