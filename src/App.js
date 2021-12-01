/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import React from 'react';
import { Dashboard, Login, Error } from './pages';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
