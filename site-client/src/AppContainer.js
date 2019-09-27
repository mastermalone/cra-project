import App from './App';

import { compose } from 'redux';
import { connect } from 'react-redux';
import dispatchCallToEndpoint from './common/dispatchCallToEndpoint/dispatchCallToEndpoint';
import appStore, { getPageContent } from './AppStore';

const { selectors: { getMainNavigation }} = appStore;


const mapStateToProps = state => ({
  navigation: getMainNavigation(state),
})
const mapDispatchToProps = dispatch => ({
  getPageContent: () => getPageContent(dispatch)
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

export default enhance(App);