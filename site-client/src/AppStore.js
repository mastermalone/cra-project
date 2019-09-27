import get from 'lodash/get';
import tostr from 'toastr';
import fetchContent from './common/fetchContent/fetchContent';

const appStore = () => {
  const appStore = {
    name: 'main',
    initialState: {
       content: {}
    },
    types: {
      GET_NAVIGATION: 'GET_NAVIGATION',

    },
    reducer: (state = appStore.initialState, action = {}) => {  
      switch (action.type) {
        case appStore.types.GET_NAVIGATION:
          return {
            ...state,
            content: {
              navigation: action.payload
            }
          }
        default:
          return state;
      }
    },
    creators: {
      getNaviagtion: payload => ({
        type: appStore.types.GET_NAVIGATION,
        payload
      }),
    },
    selectors: {
      getMainNavigation: state => get(state, 'main.content.navigation', []), 
    }
  }

  return appStore;
}

export default appStore();

export const getPageContent = async(dispatch) => {
  const { creators: { getNaviagtion } } = appStore();
  const url = 'https://site-client.s3-us-west-1.amazonaws.com/navigation.json';

  try {
    const navData = await fetchContent({method: 'get', url});
    const { data: { navigation } } = navData;
    dispatch(getNaviagtion(navigation));

  } catch (err) {
    tostr.error('There was an error fetching the main navigation\n', err);
  }
}