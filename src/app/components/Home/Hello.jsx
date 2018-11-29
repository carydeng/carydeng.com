import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Parallax} from 'react-scroll-parallax';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Hello = ({classes, text}) => (
    <div className="flex justify-center">
        {text.split('').map((char, i) => {
            let xRadius = (text.length - 1) / 2;
            let offset = getRandomInt(100, 600);
            return (
                <Parallax
                    key={i}
                    offsetXMin={0}
                    offsetXMax={60 * (i - xRadius)}
                    offsetYMin={-offset}
                    offsetYMax={offset}
                >
                    <div style={{height: 64, width: 24, textAlign: 'center', fontSize: 32}}>{char}</div>
                </Parallax>
            )
        })}
    </div>
);

const styles = (theme) => ({
    root: {},
});

export default withStyles(styles)(Hello);