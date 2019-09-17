import React, { Suspense } from 'react';
import Header from './components/header/Header';

import Navigation from './components/navigation/Navigation';
import './App.css';
import { Route, Switch } from 'react-router-dom';


/*
Add lazy loaded componets here
*/
const homePage = React.lazy(() => import('./pages/home/homeContainer'));
const aboutPage = React.lazy(() => import('./pages/about/aboutContainer'));

// Fills the routed component with some initial props
const renderComponent = (Component, otherProps) => props => (
  <Component {...props} {...otherProps} />
)

class App extends React.Component {
  constructor(props) {
    super(props);

    // Ideally, these paths would come from an endpoint
    this.state = {
      navigation: {
        paths: [
          {title: 'Home', url: '/'},
          {title: 'About', url: '/about'}
        ],
      }
    };
  }

  render() {
    const { location } = this.props;
    const { navigation: { paths } } = this.state;
    return (
      <div>
        <Header><Navigation paths={paths} /></Header>
        <div className="container">
          <Suspense fallback={null}>
            <Switch location={location}>
              <Route exact path="/" render={renderComponent(homePage)} />
              <Route path="/about" render={renderComponent(aboutPage)} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;
