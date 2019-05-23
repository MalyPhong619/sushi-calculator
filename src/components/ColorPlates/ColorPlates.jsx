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
            display: flex;
            justify-content: center;
            flex-flow: column nowrap;
            align-items: center;
            width: 25%;
            margin-top: 2vh;
            text-align: center;
            width: 100%;
          }
          .platePrice {
            margin: 0;
          }
          .outerPlate {
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-flow: row nowrap;
            border: 1px solid black;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            box-shadow: 0px 3px 10px black, inset 5px 3px 5px 0 rgba(255,255,255,.4);
          }
          .innerPlate {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid black;
            border-radius: 50%;
            width: 50%;
            height: 50%;
            background-color: white;
            box-shadow: inset 5px 3px 5px 0 rgba(20,20,20,.4);
            overflow: hidden;
          }
          .plateTotal {
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 1.2rem;
          }
          .buttonStyle {
            background: black;
            opacity: .5;
            font-size: 1em;
            color: white;
            text-align: center;
            border-radius: 50%;
            width: 30px;
            height: 30px;
          }
          .buttonStyle:hover {
            opacity: 1;
          }
          `}
        </style>
        <h2>Color Plates:</h2>
        {Object.keys(props.restaurant.colorPlates).map((plate, index) => {
          let currentPlate = props.restaurant.colorPlates[plate];
          let plateClicks = 0;

          function addPlates() {
            plateClicks++
            let sushitototal = currentPlate * plateClicks

            props.information(sushitototal)
          }

          function subtractPlates() {
            plateClicks--
            let minusSushiTotal = currentPlate * plateClicks

            props.information(minusSushiTotal)

          }


          if(currentPlate){
            return <div key={index} className='plate'>
              <h2 className='platePrice'>$ {currentPlate}</h2>
              <div style={{backgroundColor: plate}} className='outerPlate'>
                <button onClick={subtractPlates} className='buttonStyle' value='-'>-</button>
                <div className='innerPlate'>
                  <input className='plateTotal'
                    type='text'
                    id={plate}
                    ></input>
                </div>
                <button onClick={addPlates} className='buttonStyle' value='+'>+</button>
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
