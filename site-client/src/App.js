import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';


/*
Add lazy loaded componets here
*/
const homePage = React.lazy(() => import('./pages/home/homeContainer'));

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
          </Switch>
        </Suspense>
      </div>
    )
  } 
  // render() {
  //   return (
  //     <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  //   );
  // };
}

export default App;
