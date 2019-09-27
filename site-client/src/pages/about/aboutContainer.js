import about from './about';
import './about.scss';

import { connect } from 'react-redux';
import { compose } from 'redux';

import dispatchCallToEndpoint from '../../common/dispatchCallToEndpoint/dispatchCallToEndpoint';

import aboutStore, { getPageContent } from './aboutStore';

const { selectors: { getAboutPageContent } } = aboutStore;

const mapStateToProps = state => ({
    pageContent: getAboutPageContent(state),
  });

const mapDispatchToProps = dispatch => ({
  getPageContent: () => getPageContent(dispatch),
})

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

export default enhance(about);