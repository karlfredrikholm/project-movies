import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from 'components/NavBar';
import List from 'components/List';
import Overview from 'components/Overview';
import NotFound from 'components/NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/section/popular" />} />
        <Route path="/section/:section" element={<List />} />
        <Route path="/movies/:id" element={<Overview />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} replace />
      </Routes>
    </BrowserRouter>
  );
};
