/* eslint-disable import/no-extraneous-dependencies */
import '@fontsource/poppins';

import { createTheme } from '@mui/material/styles';

// Defining a customer theme

const theme = createTheme({
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
      `,
		},
	},
	typography: {
		h1: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			fontSize: '53.75px',
			// lineHeight: '1.15rem',
		},
		h2: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			fontSize: '44.79px',
			// lineHeight: '1.15rem',
		},
		h3: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			fontSize: '37.32px',
			// lineHeight: '1.15rem',
		},
		h4: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			fontSize: '31.1px',
			// lineHeight: '1.15rem',
		},
		h5: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			fontSize: '25.92px',
			// lineHeight: '1.15rem',
		},
		h6: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
			fontSize: '21.6px',
			// lineHeight: '1.15rem',
		},
		body1: {
			fontFamily: 'poppins',

			fontStyle: 'normal',
			fontWeight: 200,
			fontSize: '18px',
			// lineHeight: '1.6rem',
		},
		body2: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 200,
			fontSize: '15px',
			// lineHeight: '1.6rem',
		},
		subtitle1: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 200,
			fontSize: '12.5px',
			// lineHeight: '1.6rem',
		},
		subtitle2: {
			fontFamily: 'poppins',
			fontSize: '11.5px',
			fontStyle: 'normal',
			fontWeight: 200,
			// lineHeight: '1.6rem',
		},
		caption: {
			fontFamily: 'poppins',
			color: '#474747',
			fontStyle: 'normal',
			fontWeight: 200,
			fontSize: '10px',
			// lineHeight: '1.6rem',
		},
	},
});

export default theme;
