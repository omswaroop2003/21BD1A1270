import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListPage from './components/ProductListPage';
import ProductDetailsPage from './components/ProductDetailsPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<ProductListPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
