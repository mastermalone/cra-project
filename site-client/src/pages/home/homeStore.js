import get from 'lodash/get';
import fetchContent from '../../common/fetchContent/fetchContent';
import toastr from 'toastr';
import { createSelector } from 'reselect';

const homeStore = () => {
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
      getCustomCarouselImages: state => createSelector(() => {
        const { selectors: { getCarouselImages } } = homeStore;
        const images = getCarouselImages(state);

        return {
          images,
        }
      }),
    }
  }

  return homeStore;
};

export const getPageContent = async (dispatch) => {
  const { creators: { getCarouselImages } } = homeStore();
  const url = 'https://api.giphy.com/v1/gifs/search?api_key=NhLjkasi60kqXKxzBbvKFKU9fzHoRROf&q=cats&limit=10&offset=0&rating=G&lang=en';
  
  try {
    const pageData = await fetchContent({ url, method: 'get' });
    const { data } = pageData.data;
    const mappedGiphyImages = data.map(({ images: { original: { url }} }) => ({
      url,
    }));
    
    dispatch(getCarouselImages(mappedGiphyImages));
  } catch (err) {
    toastr.error('There was an error obtaining the Home page data.', err);
  }
}

export default homeStore();