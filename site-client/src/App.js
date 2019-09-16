import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';


/*
Add lazy loaded componets here
*/
const homePage = React.lazy(() => import('./pages/home/homeContainer'));
const aboutPage = React.lazy(() => import('./pages/about/aboutContainer'));

const renderComponent = (Component, otherProps) => props => (
  <Component {...props} {...otherProps} />
)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log('The App component mounted');
  }

  render() {
    const { location } = this.props;
    return (
      <div className="container">
        <Suspense fallback={null}>
          <Switch location={location}>
            <Route exact path="/" render={renderComponent(homePage)} />
            <Route path="/about" render={renderComponent(aboutPage)} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
