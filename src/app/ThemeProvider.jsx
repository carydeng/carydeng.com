import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function ThemeProvider(props) {
    const themeConfig = {
        palette: {

        },

        overrides: {

        },

        props: {

        },

        typography: {
            useNextVariants: true,
        },
    };
    const theme = createMuiTheme(themeConfig);
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {props.children}
        </MuiThemeProvider>
    );
}

export default ThemeProvider;