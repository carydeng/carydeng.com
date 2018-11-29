import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Parallax} from 'react-scroll-parallax';
import bg from '../../images/watercolor.jpg';

const Background = () => (
    <Parallax
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
    >
        <div
            className="hero-image"
            style={{backgroundImage: `url(${bg})`, height: '150vw', width: '100vw'}}
        />
    </Parallax>
);

const styles = () => ({
    root: {},
});

export default withStyles(styles)(Background);