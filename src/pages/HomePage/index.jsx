import React from 'react';

import { Form } from '@unform/web';

import api from '../../services/api';

import { useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import { Container, Title, Button } from './styles';

const HomePage = () => {
  const navigation = useHistory();
  
  const handleSubmit = React.useCallback(({ airports, clouds, height, width, history }) => {

    // O canvas precisa ser um quadrado
    if (height !== width) return

    api.get('/', {
      params: {
        history,
        airports, 
        clouds, 
        height, 
        width,
      },
    }).then(({ data }) => {
      console.log(data);
      navigation.push('/render', data);
    }).catch((err) => console.log(err));
    
  }, [navigation]);
  
  return (
    <Container>
    <Title>Cálculo</Title>
    <Form onSubmit={handleSubmit}>
    <Input placeholder='Insira o número de aeroportos (mínimo 3)' name='airports' />
    <Input placeholder='Insira o número de núvens (mínimo 4)' name='clouds' />
    <Input placeholder='Insira a altura do terreno (mínimo 10)' name='height' />
    <Input placeholder='Insira a largura do terreno (mínimo 10)' name='width' />
    
    <Button type='submit'>Realizar o cálculo</Button>
    </Form>
    </Container>
  )
}
  
export default HomePage;
  
  
/*
  
Testing purposes
const data = response.data.reduce(
  (accumulator, current) => {
    switch (current) {
      case 'airport':
        return { ...accumulator, airports: accumulator.airports + 1 };

      case 'cloud':
        return { ...accumulator, clouds: accumulator.clouds + 1 };

      default:
        return { ...accumulator, empty: accumulator.empty + 1 };
      }
    },
    {
      empty: 0, 
      clouds: 0, 
      airports: 0 }
    )

*/