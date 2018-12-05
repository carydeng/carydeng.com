import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainContainer from './MainContainer';
import Home from './Home/index';
import Footer from './Footer';

const Root = () => (
    <>
        <MainContainer>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </MainContainer>
        <Footer />
    </>
);
export default Root;