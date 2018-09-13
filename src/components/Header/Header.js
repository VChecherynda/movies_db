import React from 'react';

import classes from './Header.css';

import logo from '../../Assets/img/greenAppIcon.svg';

const header = (props) => {
  return (
    <div>
      <div className={classes.TitleBar}>
        <div className={classes.Logo}>
          <img width="50" src={logo} alt="app icon"/>
        </div>
        <div>
          <h1>MovieDB</h1>
        </div>
      </div>

      <input className={classes.Input} placeholder="Enter search team"/>
    </div>
  )
}

export default header;