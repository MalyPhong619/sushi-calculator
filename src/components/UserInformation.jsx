import React from 'react';

function UserInformation(props) {
  const border = {
    width: '50%',
    height: 'auto'
  }

  return(
    <form style={border}>
      <h1>{props.restaurant.name}</h1>
      <h2>{props.restaurant.location}</h2>
      <h3>Hours of operation: {props.restaurant.openingTime} - {props.restaurant.closingTime}</h3>
      <h1>Calculated Total:</h1>
      <h1>{props.restaurant.restaurantTotal}</h1>
    </form>
  )
}

  export default UserInformation;
