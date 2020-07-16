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
  font-size: 30px;
  color: #6A5ACD;
  font-weight: 400;
`;

export const Answer = styled.h2`
  margin-left: 10px;
  font-size: 26px;
  color: black;
`;

export const Button = styled.button`
  height: 80px;
  margin-top: 10px;
  border: none;
  padding: 10px 40px;
  border-radius: 8px;
  background-color: #6A5ACD;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Wrapper = styled.div`
  display: flex;
`;