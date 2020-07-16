import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #312e38;

  padding: 40px 100px;

  form {
    display: flex;
    flex-direction: column;
  }
`
export const Title = styled.h1`
  font-size: 60px;
  color: #6A5ACD;
`;

export const Button = styled.button`
  height: 80px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  background-color: #6A5ACD;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;