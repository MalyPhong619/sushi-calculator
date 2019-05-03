import React from 'react';

function ColorPlates() {
  return(
    <div>
      <style jsx>{`
          .outerPlate {
            border: 1px solid red;
            width: 100px;
            height: 100px;
          }
          .innerPlate {
            border: 1px dotted red;
            width: 50%;
            height: 50%;
          }

          `}
        </style>

        <div>
          <div className='outerPlate'>
            <p className='innerPlate'></p>
          </div>
        </div>


      </div>
    );
  }

  export default ColorPlates;
