import React from 'react';
import PropTypes from 'prop-types';

function ColorPlates(props) {
  return(
    <div id='colorPlatesDiv'>
      <style jsx>{`
          #colorPlatesDiv {
            display: flex;
            justify-content: center;
            flex-flow: column nowrap;
          }
          .plate {
            width: 25%;
            text-align: center;
            margin: 10px;
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
          `}
        </style>
        <h2>Color Plates:</h2>
        {Object.keys(props.restaurant.colorPlates).map((plate, index) => {
          let currentPlate = props.restaurant.colorPlates[plate];
          if(currentPlate){
            return <div key={index} className='plate'>
              <div style={{backgroundColor: plate}} className='outerPlate'>
                <div className='innerPlate'>
                  <h3 className='platePrice'>$ {currentPlate}</h3>
                </div>
              </div>
            </div>
          }
        })}
      </div>
    );
  }

  ColorPlates.propTypes = {
    restaurant: PropTypes.object
  }

  export default ColorPlates;
