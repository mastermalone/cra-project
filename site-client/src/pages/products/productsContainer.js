import { connect } from 'react-redux';
import { compose } from 'redux';
import Products from './products';
import productsStore, { getPageContent } from './productsStore';
import dispatchCallToEndpoint from '../../common/dispatchCallToEndpoint/dispatchCallToEndpoint';

const { selectors: { getFilteredProducts } } = productsStore; 


const mapStateToProps = state => ({
  products: getFilteredProducts(state)(),
});

const mapDispatchToProps = dispatch => ({
  getPageContent: () => getPageContent(dispatch),
});

/**
 * Connect your page to the store and use the dispatchCallToEndpoint
 * HOC component to fetch data which is calles the getPageContent method
 * within the mapStateToProps
*/

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps),
  dispatchCallToEndpoint,
);

export default enhance(Products);
