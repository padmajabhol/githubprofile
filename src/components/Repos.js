/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { items } from 'fusioncharts';
import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../Context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item; //destructuring language out of item
    if (!language) return total; //just return total
    if (!total[language]) {
      //if its not on the object create a new value
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      //if its already on the object add the value
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    // console.log(language);
    // console.log((total[language] = 30));
    return total;
  }, {});
  //turn languages obj to an array
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    },
  );

  stars = Object.values(stars).slice(-5).reverse();
  forks = Object.values(forks).slice(-5).reverse();
  // const chartData = [
  //   {
  //     label: languages[0].label,

  //     value: languages[0].value,
  //     color: '#FFC600',
  //   },
  //   {
  //     label: languages[1].label,

  //     value: languages[1].value,
  //     color: '#E900FF',
  //   },
  //   {
  //     label: languages[2].label,

  //     value: languages[2].value,
  //     color: '#5800FF',
  //   },
  //   {
  //     label: languages[3].label,

  //     value: languages[3].value,
  //     color: '#CFFFDC',
  //   },
  //   {
  //     label: languages[4].label,

  //     value: languages[4].value,
  //     color: '#1F1D36',
  //   },
  // ];
  return (
    <section className='section'>
      <Wrapper className='section-name'>
        {/* <ExampleChart data={chartData} /> */}
        <Pie3D data={mostUsed} />
        <Column3D data={stars} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={forks} />
      </Wrapper>
    </section>
  );
};
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
