/* eslint-disable operator-assignment */
/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../Context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = React.useContext(GithubContext);
  let languages = repos.reduce((total, item) => {
    const { language } = item; //destructuring language out of item
    if (!language) return total; //just return total
    if (!total[language]) {
      //if its not on the object create a new value
      total[language] = { label: language, value: 1 };
    } else {
      //if its already on the object add the value
      total[language] = { ...total[language], value: total[language].value + 1 };
    }
    // console.log(language);
    // console.log((total[language] = 30));
    return total;
  }, {});
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);
  const chartData = [
    {
      label: 'Venezuela',
      value: '290',
      color: '#7A0BC0',
    },
    {
      label: 'Saudi',
      value: '260',
      color: '#FA58B6',
    },
    {
      label: 'Canada',
      value: '180',
      color: '#270082',
    },
  ];
  return (
    <div>
      {/* <ExampleChart data={chartData} /> */}
      <Pie3D data={languages} />
    </div>
  );
};

export default Repos;
