import get from 'lodash/get';
import { createSelector } from 'reselect';
import fetchContent from '../../common/fetchContent/fetchContent';

const homeStore = () => {

  console.log('Getting the homestore')
  const homeStore = {
    name: 'home',
    types: {
      RECEIVE_CAROUSEL_IMAGES: 'RECEIVE_CAROUSEL_IMAGES'
    },
    initialState: {
      content: {}
    },
    reducer: (state = homeStore.initialState, action = {}) => {
      switch(action.type) {
        case homeStore.types.RECEIVE_CAROUSEL_IMAGES:
        return {
          ...homeStore.initialState,
          content: {
            images: {
              carouselImages: action.payload,
            }
          }
        }
        default:
          return homeStore.initialState;
      }
    },
    creators: {
      getCarouselImages: payload => ({
        type: homeStore.types.RECEIVE_CAROUSEL_IMAGES,
        payload, 
      }),
    },
    selectors: {
      getCarouselImages: state => get(state, 'home.content.images.carouselImages', []),
    }
  }

  return homeStore;
};

export const getPageContent = async (dispatch) => {
  const { creators: { getCarouselImages } } = homeStore();
  const url = 'https://pixabay.com/api/?key=13638022-5198c1daa726cc884a84dc5eb&q=yellow+flowers&image_type=photo';
  const pageData = await fetchContent({
    url: url
  });

  const { hits } = pageData.data;
  const mappedImages = hits.map(hit => ({url: hit.userImageURL}));
  dispatch(getCarouselImages(mappedImages));
}

export default homeStore();