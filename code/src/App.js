import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from 'components/List';
import Overview from 'components/Overview';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/movies/:id" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  );
};
