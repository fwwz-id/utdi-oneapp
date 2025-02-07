"use client";

import { type PaletteOptions, type ThemeOptions } from '@mui/material/styles';
import createTheme from "@mui/material/styles/createTheme";

const colorSchemes: PaletteOptions = {
    primary: {
        main: '#292e59',
    },
    secondary: {
        main: '#f9bb36',
    },
    background: {
        default: '#0a0a0a',
        paper: '#151516',
    },
    text: {
        primary: '#f7f6f6',
        secondary: 'rgba(232,232,232,0.7)',
    },
    divider: 'rgba(197,197,197,0.2)',
}

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        ...colorSchemes,
    },
    typography: {
        allVariants: {
            color: colorSchemes.text?.primary,
        },
        fontFamily: 'var(--font-geist-sans)',
        caption: {
            fontFamily: 'var(--font-geist-mono)',
        },
        button: {
            fontFamily: 'var(--font-geist-mono)',
        },
    },
    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    color: colorSchemes.text?.primary,
                },
            },
        },
        // MuiTypography: {
        //     styleOverrides: {
        //         root: {
        //             color: colorSchemes.text?.primary,
        //         },
        //     },
        // }
    }
};

const theme = createTheme(themeOptions);

export default theme;
