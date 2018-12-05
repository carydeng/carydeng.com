import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import {Container, ParallaxCharacter} from './elements';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ParallaxText = ({classes, text}) => {
    let xRadius = (text.length - 1) / 2;
    let offsetY;
    return (
        <Container>
            {text.split('').map((char, i) => {
                offsetY = getRandomInt(100, 600);
                return (
                    <Parallax
                        key={i}
                        offsetXMin={0}
                        offsetXMax={60 * (i - xRadius)}
                        offsetYMin={-offsetY}
                        offsetYMax={offsetY}
                    >
                        <ParallaxCharacter>{char}</ParallaxCharacter>
                    </Parallax>
                )
            })}
        </Container>
    );
};

export default ParallaxText;