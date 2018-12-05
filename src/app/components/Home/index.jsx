import React from 'react';
import {Container} from './elements';
import PlaceHolder from './Placeholders';
import ParallaxText from './ParallaxText';

// TODO: Home
const Home = () => (
    <Container>
        <PlaceHolder repeat={12}/>
        <ParallaxText text="Hello, I'm Cary Deng!"/>
        <PlaceHolder repeat={8}/>
        <ParallaxText text="I make great stuff!"/>
        <PlaceHolder repeat={20}/>
    </Container>
);

export default Home;