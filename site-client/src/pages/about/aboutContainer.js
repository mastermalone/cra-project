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


const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  dispatchCallToEndpoint,
);

export default enhance(about);