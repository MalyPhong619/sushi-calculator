import React from 'react';
import ColorPlates from './ColorPlates/ColorPlates';
import CalculateForm from './CalculateForm';
import styled from 'styled-components';

function CalcDisplay(props){
  console.log("Calc ", props)
  const MainCalcDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  `
  return(
    <MainCalcDiv>
      <ColorPlates />
      <CalculateForm />
    </MainCalcDiv>
  );
}

export default CalcDisplay;
