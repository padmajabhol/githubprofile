/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import octa from '../assets/pngwing.com.png';

const Login = () => (
  <Wrapper>
    <div className='container'>
      <img src={octa} alt='github octacat' />
      <h1>OctaStats</h1>
      <Btn>Login</Btn>
    </div>
  </Wrapper>
);
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
    width: 60%;
  }
  h1 {
    color: #b3b2c5;
    font-family: roboto;
    font-size: 4rem;
  }
`;
const Btn = styled.button`
  background-color: #6b62b9;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  padding: 8px 18px;
`;
export default Login;
