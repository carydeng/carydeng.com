import React from 'react';
import PlaceHolder from './Placeholders';
import ParallaxText from './ParallaxText';

// TODO: Home
const Home = () => (
    <section className="flex flex-column align-center">
        <PlaceHolder repeat={12}/>
        <ParallaxText text="Hello, I'm Cary Deng!"/>
        <PlaceHolder repeat={8}/>
        <ParallaxText text="I make great stuff!"/>
        <PlaceHolder repeat={20}/>
    </section>
);

export default Home;