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
const productsPage = React.lazy(() => import('./pages/products/productsContainer'));

// Fills the routed component with some initial props
const renderComponent = (Component, otherProps) => props => (
  <Component {...props} {...otherProps} />
)

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { location, navigation: { paths } } = this.props;
    
    return (
      <div>
        <Header><Navigation paths={paths} /></Header>
        <div className="container">
          <Suspense fallback={null}>
            <Switch location={location}>
              <Route exact path="/" render={renderComponent(homePage)} />
              <Route path="/about" render={renderComponent(aboutPage)} />
              <Route path="/products" render={renderComponent(productsPage)} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;
