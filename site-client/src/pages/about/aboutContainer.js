import about from './about';

import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = state => (
  {
    test: 'About Page Data'
  }
);


const enhance = compose(
  connect(
    mapStateToProps,
  )
);

export default enhance(about);