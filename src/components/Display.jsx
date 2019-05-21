import React from 'react';
import PropTypes from 'prop-types';
import Restaurant from './Restaurants/Restaurant';

function Display(props){
  console.log(props.onHandleSelectingRestaurant)

  return(
    <div>
      {props.restaurantList.map((post, index) =>
        <h1 onClick={props.onHandleSelectingRestaurant}
          key={index}> {post.name}</h1>
      )}
    </div>
  )
}

Display.propTypes = {
  restaurantList: PropTypes.array,
  onHandleSelectingRestaurant: PropTypes.func
}

export default Display;
