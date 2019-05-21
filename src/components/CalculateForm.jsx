import React from 'react';

function CalculateForm(props) {
  console.log("calc: ", props)
  const border = {
    border: '1px solid red',
    width: '50%',
    height: 'auto'
  }

  function calculateEntries(props){

  }

  return(
    <form style={border}>
      <h1>{props.restaurant.name}</h1>
      <h2>{props.restaurant.location}</h2>
      <h3>Hours of operation: {props.restaurant.openingTime} / {props.restaurant.closingTime}</h3>


    <h1>CALCULATOR</h1>
    <input
    type='text'
    id='redPlateSum'
    placeholder='Red Plate'></input>
    </form>

  );
}

export default CalculateForm;
