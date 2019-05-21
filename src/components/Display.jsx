import React from 'react';
import PropTypes from 'prop-types';

function Display(props){

  return(
    <div>
      {props.restaurantList.map((post, index) =>
        <h1 onClick={() => props.onHandleSelectingRestaurant(post)}
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
