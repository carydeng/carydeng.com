import React from 'react';
import PlaceHolder from './Placeholder';
import Hello from './Hello';

// TODO: Home
const Home = () => (
    <section className="flex flex-column align-center">
        <PlaceHolder/>
        <Hello text="HELLO! I'M CARY DENG."/>
        <PlaceHolder/>
    </section>
);

export default Home;