import React from 'react';
import styled from 'styled-components';
import RestaurantControl from './Restaurants/RestaurantControl';

function Display(){
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
      <RestaurantControl />
    </div>
  )
}

export default Display;
