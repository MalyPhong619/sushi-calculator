import React from 'react';
import ColorPlates from './ColorPlates/ColorPlates';
import CalculateForm from './CalculateForm';
import styled from 'styled-components';

function CalcDisplay(){
  const mainCalcDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  `
  return(
    <mainCalcDiv>
      <ColorPlates />
      <CalculateForm />
    </mainCalcDiv>
  );
}

export default CalcDisplay;
