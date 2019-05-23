import React from 'react';
import ColorPlates from './ColorPlates/ColorPlates';
import UserInformation from './UserInformation';
import styled from 'styled-components';

function CalcDisplay(props){
  console.log(props)
  const MainCalcDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  `
  return(
    <MainCalcDiv>
      <ColorPlates information={props.information} restaurant={props.restaurant} />
      <UserInformation restaurant={props.restaurant}/>
    </MainCalcDiv>
  );
}

export default CalcDisplay;
