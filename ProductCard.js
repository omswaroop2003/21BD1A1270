import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image={`https://via.placeholder.com/150?text=${product.name}`}
      alt={product.name}
    />
    <CardContent>
      <Typography variant="h6" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Company: {product.company}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Category: {product.category}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Price: ${product.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Rating: {product.rating}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Discount: {product.discount}%
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
      </Typography>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </CardContent>
  </Card>
);

export default ProductCard;
