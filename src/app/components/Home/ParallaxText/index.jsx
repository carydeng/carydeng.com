import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Parallax} from 'react-scroll-parallax';
import {ParallaxCharacter} from './elements';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ParallaxText = ({classes, text}) => {
    let xRadius = (text.length - 1) / 2;
    let offset;
    return (
        <div className="flex justify-center">
            {text.split('').map((char, i) => {
                offset = getRandomInt(100, 600);
                return (
                    <Parallax
                        key={i}
                        offsetXMin={0}
                        offsetXMax={60 * (i - xRadius)}
                        offsetYMin={-offset}
                        offsetYMax={offset}
                    >
                        <ParallaxCharacter>{char}</ParallaxCharacter>
                    </Parallax>
                )
            })}
        </div>
    );
}

const styles = (theme) => ({
    root: {},
});

export default withStyles(styles)(ParallaxText);