import React from 'react';
import {Parallax} from 'react-scroll-parallax';
import withStyles from '@material-ui/core/styles/withStyles';

const HeroBanner = ({classes, image, min, max, children}) => (
    <div className={classes.container}>
        <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
            <div
                className={classes.image}
                style={{backgroundImage: `url(${image})`}}
            />
        </Parallax>
        <div className={classes.children}>{children}</div>
    </div>
);

const styles = () => ({
    container: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
    },
    image: {
        width: '100vw',
        height: '150vh', // this should be dynamic, right now it's fixed based on a min max offset
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    children: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default withStyles(styles)(HeroBanner);