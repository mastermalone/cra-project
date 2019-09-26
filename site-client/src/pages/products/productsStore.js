import { createSelector } from 'reselect';
import fetchContent from '../../common/fetchContent/fetchContent';
import get from 'lodash/get';

const productStore = () => {
  
  const productStore = {
    name: 'products',
    types: { GET_PRODUCTS: 'GET_PRODUCTS' },
    initialState: {
      content: {}
    },
    reducer: (state = productStore.initialState, action = {}) => {  
      switch (action.type) {
        case productStore.types.GET_PRODUCTS:
        return {
          ...state,
          content: {
            items: action.payload,
          }
        }
        default:
          return state
      }
    },
    creators: {
      getProducts: payload => ({
        type: productStore.types.GET_PRODUCTS,
        payload,
      }),
    },
    selectors: {
      getProducts: state => get(state, 'products.content.items'),
      getFilteredProducts: state => createSelector(() => {
        const {selectors: { getProducts }} = productStore;
        const products = getProducts(state);
        const filteredData = products.filter(({ employee_age }) => parseInt(employee_age) === 19);
        return filteredData;
      }),
    }
  }

  return productStore;
};

export const getPageContent = async (dispatch) => {
  const { creators: { getProducts }} = productStore();
  const url = 'http://dummy.restapiexample.com/api/v1/employees';
  const pageContent = await fetchContent({ method: 'get', url });
  const { data } = pageContent;

  dispatch(getProducts(data));
}

export default productStore();