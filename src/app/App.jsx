import React, {Component} from 'react';
import ThemeProvider from './ThemeProvider';
import {ParallaxProvider} from 'react-scroll-parallax';
import {BrowserRouter as Router} from 'react-router-dom';
import Root from './components/Root';


// TODO: About Me
// TODO: Resume
// TODO: Contact

class App extends Component {
    render() {
        return (
            <ThemeProvider>
                <ParallaxProvider>
                    <Router>
                        <Root />
                    </Router>
                </ParallaxProvider>
            </ThemeProvider>
        );
    }
}

export default App;
