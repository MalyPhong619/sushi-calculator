import React from 'react';

function ColorPlates() {

  return(
    <div>
      <style jsx>{`
          .plate {
            margin-top: 5px;
            width: 25%;
            text-align: center;
          }
          .outerPlate {
            display: inline-block;
            border: 1px solid black;
            border-radius: 50%;
            width: 200px;
            height: 200px;
          }
          .innerPlate {
            display: inline-block;
            vertical-align: center;
            border: 1px dotted black;
            border-radius: 50%;
            width: 50%;
            height: 50%;
            margin-top: 25%;
            background-color: white;
          }
          `}
        </style>
        <div className='plate redPlate'>
          <div style={{backgroundColor: '#FF2A2B'}} className='outerPlate'>
            <p className='innerPlate'></p>
          </div>
        </div>
        <div className='plate bluePlate'>
          <div style={{backgroundColor: '#0F97FF'}} className='outerPlate'>
            <p className='innerPlate'></p>
          </div>
        </div>
        <div className='plate greenPlate'>
          <div style={{backgroundColor: '#54FF40'}} className='outerPlate'>
            <p className='innerPlate'></p>
          </div>
        </div>
        <div className='plate yellowPlate'>
          <div style={{backgroundColor: '#B000FF'}} className='outerPlate'>
            <p className='innerPlate'></p>
          </div>
        </div>
        <div className='plate purplePlate'>
          <div style={{backgroundColor: '#F5E922'}} className='outerPlate'>
            <p className='innerPlate'></p>
          </div>
        </div>


      </div>
    );
  }

  export default ColorPlates;
