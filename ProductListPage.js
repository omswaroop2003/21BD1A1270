import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Container, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8004/api/products', {
          params: {
            category: 'Laptop',
            top: 10,
            minPrice: 1,
            maxPrice: 10000
          }
        });
        setProducts(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Top 10 Laptops
      </Typography>
      {loading ? ( // Show loading message if loading is true
        <Typography>Loading...</Typography>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductListPage;
