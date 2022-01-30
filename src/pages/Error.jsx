/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Error = () => (
  <Wrapper>
    <div>
      <h1>404</h1>
      <h3>The page you are looking for, does not exist.</h3>
      <Btn>
        <Link to='/' className='btn' style={{ textDecoration: 'none', color: '#b3b2c5' }}>
          Back Home
        </Link>
      </Btn>
    </div>
  </Wrapper>
);
const Wrapper = styled.section`
  position: relative;
  margin: auto 0 auto 0;
  text-align: center;
  font-family: Roboto;
  h1 {
    font-weight: 100;
    font-size: 15rem;
    line-height: 0px;
    color: #ebd64f;
  }
  h3 {
    color: #b3b2c5;
    margin-bottom: 1.5rem;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 8rem;
    }
    h3 {
      padding-right: 10%;
      padding-left: 10%;
    }
  }
`;

const Btn = styled.button`
  background-color: #6b62b9;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  padding: 10px;
`;

export default Error;
