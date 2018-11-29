import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';

const Root = () => (
    <>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
    </>
);

export default Root;