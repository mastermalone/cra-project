import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../../components/badge/badge';

const Products = ({ products }) => (
    <div className="products-page">
      <Badge data={products} />
    </div>
);

Products.propTypes ={
  products: PropTypes.arrayOf(PropTypes.object),
}

Products.defaultProps = {
  products: []
};

export default Products;
