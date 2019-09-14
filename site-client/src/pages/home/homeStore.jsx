import get from 'lodash/get';
import { createSelector } from 'reselect';

const homeStore = () => {

  console.log('Getting the homestore')
  const homeStore = {
    name: 'homeStore',
    types: {
      RECEIVE_CAROUSEL_IMAGES: 'RECEIVE_CAROUSEL_IMAGES'
    },
    initialState: {
      home: {
        content: {}
      }
    },
    reducer: (state = homeStore.initialState, action = {}) => {
      switch(action.type) {
        case homeStore.types.RECEIVE_CAROUSEL_IMAGES:
        return {
          ...homeStore.initialState,
          home: {
            content: {
              carouselImages: action.payload,
            }
          }
        }
        default:
          return homeStore.initialState;
      }
    },
    creators: () => ({
      getCarouselImages: payload => ({
        type: homeStore.types.RECEIVE_CAROUSEL_IMAGES,
        payload, 
      }),
    }),
    selectors: {
      getCarouselImages: state => get(state, 'home.content.carouselImages', []),
    }
  }

  return homeStore;
};

export default homeStore;