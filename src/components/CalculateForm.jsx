import React from 'react';

function CalculateForm() {
  const border = {
    border: '1px solid red',
    width: '50%',
    height: 'auto'
  }
  return(
    <form style={border}>
    <h1>CALCULATOR</h1>
    <input
    type='text'
    id='redPlateSum'
    placeholder='Red Plate'></input>
    </form>

  );
}

export default CalculateForm;
