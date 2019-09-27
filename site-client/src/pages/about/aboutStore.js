import get from 'lodash/get';
import fetchContent from '../../common/fetchContent/fetchContent';
import toastr from 'toastr';

const aboutStore = () => {
  
  const aboutStore = {
    name: 'about',
    types: {
      GET_ABOUT_PAGE_CONTENT: 'GET_ABOUT_PAGE_CONTENT'
    },
    initialState: {
      content: {}
    },
    reducer: (state = aboutStore.initialState, action = {}) => {
      switch(action.type) {
        case aboutStore.types.GET_ABOUT_PAGE_CONTENT:
          return {
            ...aboutStore.initialState,
            content: {
              ...action.payload,
            }        
          }
          default:
            return state
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

export const getPageContent = async (dispatch) => {
  const { creators: { getAboutContent }} = aboutStore();
  const url = 'https://site-client.s3-us-west-1.amazonaws.com/aboutPage.json';

  try {
    const pageData = await fetchContent({ url, method: 'get' });
    const { data: { pageInfo }} = pageData;
  
    dispatch(getAboutContent(pageInfo));

  } catch (err) {
    toastr.error('There was an error obtaining the About page data.', err);
  }
  
}

export default aboutStore();
