// ProductDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${productId}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch product details. Please try again later.');
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="body1">{error}</Typography>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`https://via.placeholder.com/300?text=${product.name}`}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography>Company: {product.company}</Typography>
          <Typography>Category: {product.category}</Typography>
          <Typography>Price: ${product.price}</Typography>
          <Typography>Rating: {product.rating}</Typography>
          <Typography>Discount: {product.discount}%</Typography>
          <Typography>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetailsPage;
