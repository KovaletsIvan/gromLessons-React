import React from 'react';
import User from './User';
import City from './City';
import { withDataLoader } from './withDataLoader';

const MyCity = withDataLoader(City);

const SuperUser = withDataLoader(User);

const App = () => (
  <div className="page">
    <MyCity url={'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities/1'}/>
    <SuperUser url={'https://api.github.com/users/octocat'}/>
  </div>
);

export default App;
// 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities/1'
// ('https://api.github.com/users/octocat')