import React from 'react';
import './App.css';
import styled from "styled-components";

const InfoCard = styled.div`
  width:32%;
  
  height: 200px;
  background: #33f2eb;
  border-radius: 30px;
  border: 4px ridge red;
  margin: 10px;
`

const Title = styled.h2`
text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;

`
const Info = styled.h4`
margin-bottom:10px;

`

const Container = props => {

    return (
      
        <InfoCard>
          <div>
          <Title>{props.name}</Title>
          <Info>Height:{props.height}cm</Info>
          <Info>weight:{props.mass}</Info>
          <Info>birth date:{props.home}</Info>
          </div>
        </InfoCard>
      );

}

export default Container;
