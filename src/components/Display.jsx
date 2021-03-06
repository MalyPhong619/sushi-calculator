import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Display(props){

  return(
    <div className='displayComponent'>


      {props.restaurantList.map((post, index) =>
        <h1 onClick={() => props.onHandleSelectingRestaurant(post)}
          key={index}> <Link to='/calculator' className='displayNames'>{post.name}</Link></h1>
      )}
    </div>
  )
}

Display.propTypes = {
  restaurantList: PropTypes.array,
  onHandleSelectingRestaurant: PropTypes.func
}

export default Display;
