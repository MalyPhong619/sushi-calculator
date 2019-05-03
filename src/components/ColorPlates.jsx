import React from 'react';

function ColorPlates() {
  return(
    <div>
      <style jsx>{`
          .plate {
            border: 1px solid blue;
            width: 25%;
            text-align: center;
          }
          .outerPlate {
            display: inline-block;
            border: 1px solid red;
            border-radius: 50%;
            width: 100px;
            height: 100px;
          }
          .innerPlate {
            display: inline-block;
            vertical-align: center;
            border: 1px dotted red;
            border-radius: 50%;
            width: 50%;
            height: 50%;
            margin-top: 25%;
          }

          `}
        </style>

        <div className='plate'>
          <div className='outerPlate'>
            <p className='innerPlate'></p>
          </div>
        </div>


      </div>
    );
  }

  export default ColorPlates;
