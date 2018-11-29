import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import HeroBanner from './HeroBanner';
import image from '../../images/watercolor.jpg';
import Footer from './Footer';

const Root = () => (
    <>
        <HeroBanner
            min={'-20%'}
            max={'20%'}
            image={image}
        >
            <h2>Hero</h2>
        </HeroBanner>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
    </>
);

export default Root;