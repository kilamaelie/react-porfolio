/* eslint-disable import/no-extraneous-dependencies */
import '@fontsource/poppins';

import { createTheme } from '@mui/material/styles';

// Defining a customer theme

// background-image: linear-gradient(to right bottom, #111111, #444444, #7d7d7d, #bcbcbc, #ffffff);

const defautTheme = createTheme();

const theme = createTheme(defautTheme, {
	direction: 'ltr',
	palette: {
		mode: 'light',
		primary: {
			main: '#393939',
			light: '#C9C9C9',
			dark: '#111111',
		},
		secondary: {
			main: '#D14746',
			dark: '#93001A',
		},
		text: {
			fontFamily: 'poppins',
			primary: '#393939',
			secondary: '#D14746',
			disabled: 'gray',
		},

		background: {
			default: '#FFF',
			paper: '#C9C9C9',
		},
	},

	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#FFF',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					fontFamily: 'poppins',
					fontStyle: 'normal',
					fontWeight: 500,
					fontSize: '14px',
					textDecoration: 'capitilize',
					lineHeight: '21px',
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				root: {
					fontFamily: 'poppins',
					fontStyle: 'normal',
					fontWeight: 500,
					fontSize: '14px',
					lineHeight: '21px',
					paddingTop: '2px',
					paddingBottom: '7px',
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: `
        @font-face {
          font-family: 'poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400
        }
        body {
            margin: 0;
            display: flex;
            -webkit-box-flex-wrap: wrap;
            -webkit-flex-wrap: wrap;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-pack: left;
            -ms-flex-pack: left;
            -webkit-justify-content: left;
            justify-content: left;
          }
        ::-webkit-scrollbar {
            display: none;
        }
      `,
		},
	},
	typography: {
		h1: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
		},
		h2: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
		},
		h3: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			fontSize: '37.32px',
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
		},
		h4: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			fontSize: '31.1px',
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
		},
		h5: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
		},
		h6: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			fontSize: '21.6px',
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
		},
		body1: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 200,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
			// lineHeight: '1.6rem',
		},
		body2: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 200,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
			// lineHeight: '1.6rem',
		},
		subtitle1: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 200,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
			// lineHeight: '1.6rem',
		},
		subtitle2: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 200,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
			// lineHeight: '1.6rem',
		},
		caption: {
			fontFamily: 'poppins',
			color: '#474747',
			fontStyle: 'normal',
			fontWeight: 200,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
			// lineHeight: '1.6rem',
		},
	},
});

export default theme;
