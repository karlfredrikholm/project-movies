import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import List from 'components/List';
import Overview from 'components/Overview';
import NotFound from 'components/NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/movies/:id" element={<Overview />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} replace />
      </Routes>
    </BrowserRouter>
  );
};
