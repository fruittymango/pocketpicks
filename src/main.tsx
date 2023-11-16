import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './Pages/404/index';
import ComingSoon from './Pages/ComingSoon';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon/>} /> 
        <Route path="/*" element={<PageNotFound/>} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);