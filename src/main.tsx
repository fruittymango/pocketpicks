import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import SeeMorePage from './Pages/SeeMore';
import TVShowsPage from './Pages/TVShows';
import Dashboard from './Pages/Dashboard';
import Movies from './Pages/Movies';
import './main.css';

import PageNotFound from './Pages/404';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/Dashboard" element={<Dashboard/>} /> 
        <Route path="/Movies" element={<Movies/>} />  
        <Route path="/TV-Shows" element={<TVShowsPage/>} />  
        <Route path="/See-More/:title" element={<SeeMorePage/>} /> 
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);