import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Display(props){
  console.log(props.restaurantList)
  const Something = styled.h1`
  @keyframes pulse {
    0%{color: hotpink}
    50%{color: limegreen}
    100%{color: hotpink}
  }
    animation: pulse 1s linear infinite;
    color: green;
    &:hover {
      cursor: pointer;
      animation: none;
      color: black;
    }
  `
  return(
    <div>
      <Something>Welcome to the home component</Something>
    </div>
  )
}

Display.propTypes = {
  restaurantList: PropTypes.object
}

export default Display;
