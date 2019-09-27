import homePage from './home';
import { connect } from 'react-redux';
import { compose } from 'redux';
import dispatchCallToEndpoint from '../../common/dispatchCallToEndpoint/dispatchCallToEndpoint';

import homeStore, { getPageContent } from './homeStore';

const { selectors: { getCustomCarouselImages } } = homeStore;

const mapStateToProps = state => ({
  customImages: getCustomCarouselImages(state)(),
});

const mapDispatchToProps = (dispatch) => ({
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
    mapDispatchToProps,
  ),
  dispatchCallToEndpoint,
);

export default enhance(homePage);




