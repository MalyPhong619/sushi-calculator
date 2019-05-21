import React from 'react';
import PropTypes from 'prop-types';

function ColorPlates(props) {
console.log("color plates", props)
  return(
    <div>
      <style jsx>{`
          .plate {
            margin-top: 8px;
            width: 25%;
            text-align: center;
          }
          .outerPlate {
            display: inline-block;
            border: 1px solid black;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            box-shadow: 0px 3px 10px black, inset 5px 3px 5px 0 rgba(255,255,255,.4);
          }
          .innerPlate {
            display: inline-block;
            vertical-align: center;
            border: 1px solid black;
            border-radius: 50%;
            width: 50%;
            height: 50%;
            margin-top: 25%;
            background-color: white;
            box-shadow: inset 5px 3px 5px 0 rgba(20,20,20,.4);
          }
          h2 {
            margin: 2px;
            border: 1px solid red;
          }
          `}
        </style>
        <div className='plate redPlate'>
          <h2 id='redPlate'>Price</h2>
          <div style={{backgroundColor: '#FF2A2B'}} className='outerPlate'>
            <div className='innerPlate'>
            </div>
          </div>
        </div>
        <div className='plate bluePlate'>
          <h2>Price</h2>
          <div style={{backgroundColor: '#0F97FF'}} className='outerPlate'>
            <div className='innerPlate'>
            </div>
          </div>
        </div>
        <div className='plate greenPlate'>
          <h2>Price</h2>
          <div style={{backgroundColor: '#54FF40'}} className='outerPlate'>
            <div className='innerPlate'>
            </div>
          </div>
        </div>
        <div className='plate yellowPlate'>
          <h2>Price</h2>
          <div style={{backgroundColor: '#B000FF'}} className='outerPlate'>
            <div className='innerPlate'>
            </div>
          </div>
        </div>
        <div className='plate purplePlate'>
          <h2>Price</h2>
          <div style={{backgroundColor: '#F5E922'}} className='outerPlate'>
            <div className='innerPlate'>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default ColorPlates;
