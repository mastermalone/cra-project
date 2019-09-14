import homePage from './home';
import { connect } from 'react-redux';
import { compose } from 'redux';

import homeStore from './homeStore';

const mapStateToProps = state => ({
  test: 'some crazy old data',
});


const enhance = compose(
  connect(
    mapStateToProps,
  )
);

export default enhance(homePage);




