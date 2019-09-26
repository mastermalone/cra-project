import React from 'react';
import PropTypes from 'prop-types';

const Products = ({ products }) => (
    <div className="products-page">Products page</div>
);

Products.propTypes ={
  products: PropTypes.arrayOf(PropTypes.object),
}

Products.defaultProps = {
  products: []
};

export default Products;
