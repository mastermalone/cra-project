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

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  dispatchCallToEndpoint,
);

export default enhance(homePage);




