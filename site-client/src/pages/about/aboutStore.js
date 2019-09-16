import get from 'lodash/get';
import { createSelector } from 'reselect';

const aboutStore = () => {
  
  const aboutStore = {
    name: 'about',
    types: {
      GET_ABOUT_PAGE_CONTENT: 'GET_ABOUT_PAGE_CONTENT'
    },
    initialState: {
      content: {}
    },
    reducer: (state = aboutStore.initialState, action ={}) => {
      switch(action.payload) {
        case aboutStore.GET_ABOUT_PAGE_CONTENT:
          return {
            ...aboutStore.initialState,
            content: {
              ...action.payload,
            }        
          }
          default:
            return aboutStore.initialState
      }
    },
    creators:{
      getAboutContent: payload => ({
        type: aboutStore.types.GET_ABOUT_PAGE_CONTENT,
        payload,
      })
    },
    selectors: {
      getAboutPageContent: state => get(state, 'about.content', {}),
    }
  };

  return aboutStore;
};

export default aboutStore();
