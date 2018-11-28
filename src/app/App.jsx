import React, { Component } from 'react';
import ThemeProvider from './ThemeProvider';
import {BrowserRouter as Router} from 'react-router-dom';
import Root from './components/Root';


// TODO: About Me
// TODO: Resume
// TODO: Contact

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <Router>
          <Root />
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
