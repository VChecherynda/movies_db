import React from 'react';

import classes from './Card.css';

const card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.ImageContent}>
        <a href="">
          <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg" alt="film logo" />
        </a>
      </div>

      <div className={classes.InfoContent}>

        <div className={classes.FilmHeader}>
          <div className={classes.FilmRating}>76%</div>

          <div className={classes.FilmTitle}>
            <span className={classes.FilmTitleName}>Avengers</span>
            <span className={classes.FilmDateAppearence}>April 25, 2012</span>
          </div>
        </div>

        <div className={classes.FilmOverview}>
          <p>When an unexpected enemy emerges and threatens global safety and security,
          Nick Fury, director of the international peacekeeping agency known as
          S.H.I.E.L.D., finds himself in need of a team to pull the world back…</p>
        </div>

        <div className={classes.MoreInfo}>
          <a hrer="">More info</a>
        </div>

      </div>
    </div>
  )
}

export default card;