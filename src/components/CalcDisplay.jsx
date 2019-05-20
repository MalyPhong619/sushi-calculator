import React from 'react';
import ColorPlates from './ColorPlates/ColorPlates';
import CalculateForm from './CalculateForm';
import styled from 'styled-components';

function CalcDisplay(){
  const MainCalcDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  `
  return(
    <MainCalcDiv>
      <ColorPlates />
      <CalculateForm />
    </MainCalcDiv>
  );
}

export default CalcDisplay;
