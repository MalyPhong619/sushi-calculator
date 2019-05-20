import React from 'react';
import PropTypes from 'prop-types';

function Restaurant(props) {
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.location}</h2>
      <p>{props.hoursOpen}  {props.hoursClosed}</p>
    </div>

  );
}

Restaurant.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  hoursOpen: PropTypes.string,
  hoursClosed: PropTypes.string
}

export default Restaurant;
