import { connect } from 'react-redux';
import { compose } from 'redux';
import Products from './products';
import productsStore, { getPageContent } from './productsStore';
import dispatchCallToEndpoint from '../../common/dispatchCallToEndpoint/dispatchCallToEndpoint';
// import { dispatch } from 'rxjs/internal/observable/range';

const { selectors: { getFilteredProducts } } = productsStore; 


const mapStateToProps = state => ({
  products: getFilteredProducts(state)(),
});

const mapDispatchToProps = dispatch => ({
  getPageContent: () => getPageContent(dispatch),
})

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps),
  dispatchCallToEndpoint,
);

export default enhance(Products);
