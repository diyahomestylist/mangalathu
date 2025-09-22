import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import PageBuilderPage from './pages/PageBuilderPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page-builder" element={<PageBuilderPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;