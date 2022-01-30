/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import React from 'react';
import { GithubContext } from '../Context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    { id: 1, icon: <GoRepo />, label: 'repos', value: public_repos, color: 'pink' },
    { id: 2, icon: <FiUsers />, label: 'followers', value: followers, color: 'violet' },
    { id: 3, icon: <FiUserPlus />, label: 'following', value: following, color: 'pink' },
    { id: 4, icon: <GoGist />, label: 'gist', value: public_gists, color: 'pink' },
  ];
  return (
    <Wrapper>
      <section style={{ color: 'white' }} className='infosection'>
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </section>
    </Wrapper>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <Itemdiv>
      <div>
        <p>{value}</p>
      </div>
      <div className='innerdiv'>
        <span>{icon}</span>
        <h3 style={{ marginTop: '-6px' }}>{label}</h3>
      </div>
    </Itemdiv>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;

  .infosection {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    margin-top: 20px;
    margin-bottom: 20px;
    grid-column-gap: 10px;
  }

  @media screen and (max-width: 800px) {
    .infosection {
      display: grid;
      grid-template-columns: repeat(2, minmax(100px, 1fr));
      gap: 10px;
    }
  }
`;

const Itemdiv = styled.div`
  display: grid;
  place-items: center;
  background: #6b62b9;
  padding: 0px 30px;
  border-radius: 8px;

  .innerdiv {
    display: flex;
    gap: 6px;
  }
`;

export default UserInfo;
