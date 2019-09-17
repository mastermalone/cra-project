import React from 'react';

// Provides a way for functional components to call endpoints for data
const dispatchCallToEndpoint = (WrappedComponent) => {
  class DispatchCallToEndpoint extends React.Component {
    componentDidMount() {
      const { getPageContent } = this.props;

      getPageContent();
    }

    render() {
      // This represents the component passed by the container via conpose(connect(mapStateToProps), component)
      const { getPageContent, ...props } = this.props;
      return <WrappedComponent {...props} />
    }
  }
  return DispatchCallToEndpoint;
};

export default dispatchCallToEndpoint;

