import React from 'react';
import Restaurant from './Restaurant';
import ColorPlates from '../ColorPlates/ColorPlates';

function RestaurantControl() {
  return(
    <div>
      <p>This is Restaurant Control</p>
      <ColorPlates />
      <Restaurant
        name='SUSHI SAKURA'
        location='506 SW 6th Ave'
        hoursOpen='11 am'
        hoursClosed='9:30 pm' />
    </div>
  );
}

export default RestaurantControl;
