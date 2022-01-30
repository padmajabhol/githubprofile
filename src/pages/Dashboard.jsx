/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { Info, Repos, User, Search, Navbar } from '../components';
import { GithubContext } from '../Context/context';

const Dashboard = () => (
  <Wrapper>
    {/* <Navbar />
    <Search />
    <Info />
    <User />
    <Repos /> */}
    {/* <Info /> */}
    <div className='dash'>
      <User />

      <Info />
    </div>
    <div className='box' />
    <p>Dashboard</p>
    <Repos />
  </Wrapper>
);

const Wrapper = styled.section`
  min-height: 100vh;
  margin: auto;
  .dash {
    margin: auto;
    margin-top: 10rem;
    background: #25235c;
    width: 80%;
    border-radius: 80px;
  }
  .box {
    background-color: #ebd64f;
    position: absolute;
    height: 8.5%;
    width: 80%;
    left: 10%;
    margin-top: -30px;
    /* top: 88%; */
    z-index: -10;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;

export default Dashboard;
