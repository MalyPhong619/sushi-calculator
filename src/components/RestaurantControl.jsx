import React from 'react';
import Restaurant from './Restaurant';
import ColorPlates from './ColorPlates';

function RestaurantControl() {
  return(
    <div>
      <p>This is Restaurant Control</p>
      <ColorPlates />
      <Restaurant />
    </div>
  );
}

export default RestaurantControl;
