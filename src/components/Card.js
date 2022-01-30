/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';
import { GithubContext } from '../Context/context';

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { avatar_url, html_url, name, company, blog, bio, location, twitter_username } = githubUser;
  return (
    <Wrapper>
      <div className='container'>
        <img src={avatar_url} alt={name} />
        <div>
          <h4 className='name'>{name}</h4>
          {twitter_username ? (
            <p className='twitter'>
              <BsTwitter />@{twitter_username}
            </p>
          ) : (
            <div />
          )}
        </div>
        {/* <p>{bio}</p>  */}
        <div className='details'>
          <p>
            <MdBusiness style={{ color: '#ebd64f' }} />
            {company}
          </p>
          <p>
            <MdLocationOn style={{ color: '#ebd64f' }} />
            {location || 'earth'}
          </p>
          <a href={`https://${blog}`} style={{ marginTop: '23px' }}>
            <MdLink style={{ color: '#ebd64f' }} /> {blog}
          </a>
        </div>
        <Button>
          <a href={html_url}>follow</a>
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  .container {
    /* width: 90vw;
    max-width: 600px; */
    text-align: center;
  }
  .name {
    color: #b3b2c5;
    margin-top: 5px;
    font-size: 2rem;
    font-weight: 400;
  }
  .twitter {
    color: #6860a0;
    margin-top: -28px;
  }
  .details {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-column-gap: 0px;
    color: #b3b2c5;
    font-size: 1.2rem;
    padding: 0 10rem;
  }

  img {
    margin-top: -4rem;
    margin-x: auto;
    width: 12rem;
    border-radius: 50%;
    border: #ebd64f 5px solid;
  }
  h1 {
    color: #b3b2c5;
    font-family: roboto;
    font-size: 4rem;
  }
  a {
    text-decoration: none;
    color: #bdb9e1;
  }
  @media screen and (max-width: 800px) {
    img {
      width: 10rem;
    }
    .details {
      font-size: 1rem;
      padding: 0 3rem;
    }
  }
`;

const Button = styled.button`
  padding: 8px 38px;
  font-size: 1.3rem;
  border-radius: 10px;
  background-color: #6b62b9;

  border: none;
  outline: none;
`;

export default Card;
