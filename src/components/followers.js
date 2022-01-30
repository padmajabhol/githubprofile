/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../Context/context';

const Followers = () => {
  const { followers } = React.useContext(GithubContext);
  return (
    <div style={{ color: 'white' }}>
      {followers.map((follower, index) => {
        const { avatar_url: img, html_url, login } = follower;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <img src={img} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>{html_url}</a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
