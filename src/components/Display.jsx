import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurants/Restaurant';

function Display(props){
  console.log(props.restaurantList)

  return(
    <div>
      {props.restaurantList.map((post, index) =>
        <Restaurant
          name={post.name}
          key={index} />
      )}
    </div>
  )
}

Display.propTypes = {
  restaurantList: PropTypes.array
}

export default Display;
