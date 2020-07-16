import React from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Title, Answer, Button, Wrapper } from './styles';

const RenderComponent = ({ location: { state } }) => {
  const { 
    arrivedFirstAirport,
    arrivedAllTheAirports, 
  } = state;

  const navigation = useHistory();

  return (
      <Container>
        <Wrapper>
          <Title>Em quantos dias o primeiro aeroporto será coberto por nuvens?</Title>
          <Answer>{`Em ${arrivedFirstAirport.day} dias.`}</Answer>
        </Wrapper>

        <Wrapper  >
          <Title>Em quantos dias todos os aeroportos serão cobertos por nuvens?</Title>
          <Answer>{`Em ${arrivedAllTheAirports.day} dias.`}</Answer>
        </Wrapper >

        <Button onClick={() => navigation.push('/')}>Realizar novo cálculo</Button>
      </Container>
  )
}

export default RenderComponent;