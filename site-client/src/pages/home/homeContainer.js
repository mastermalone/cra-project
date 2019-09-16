import homePage from './home';
import { connect } from 'react-redux';
import { compose } from 'redux';
import dispatchCallToEndpoint from '../../common/dispatchCallToEndpoint/dispatchCallToEndpoint';

import homeStore, { getPageContent } from './homeStore';
import { dispatch } from 'rxjs/internal/observable/range';

const { selectors: { getCarouselImages } } = homeStore;

console.log('getCarouselImages', getCarouselImages);

const mapStateToProps = state => ({
  images: getCarouselImages(state),
  test: 'Test Data'
});

const mapDispatchToProps = (dispatch) => ({
  getPageContent: () => getPageContent(dispatch),
})


const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  dispatchCallToEndpoint,
);

export default enhance(homePage);




