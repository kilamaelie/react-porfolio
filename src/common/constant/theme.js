import '@fontsource/poppins';

import { createTheme } from '@mui/material/styles';

// Defining a customer theme

// background-image: linear-gradient(to right bottom, #111111, #444444, #7d7d7d, #bcbcbc, #ffffff);
// light: '#767676',
// dark: '#111111',

const defautTheme = createTheme({
	palette: {
		mode: 'light',
		tonalOffset: 0.5,
		primary: {
			main: '#393939',
			high: '#9c9c9c20',
		},
		secondary: {
			main: '#D14746',
			dark: '#c70003',
			high: '#e8a3a22e',
		},
		text: {
			primary: '#393939',
			secondary: '#D14746',
			disabled: 'gray',
		},
		background: {
			default: '#FFF',
			paper: '#C9C9C9',
		},
	},
	typography: {
		fontFamily: "'poppins'",
	},
});

const customBtnStyle = ({ ownerState }) => {
	// Change color to custom color
	const colr =
		(ownerState.color && defautTheme.palette[ownerState.color]) ||
		defautTheme.palette.primary;

	return {
		border: `1px solid ${colr.light}`,
		color: colr.main,
		borderRadius: '10px',
		padding: '10px 27px',
		':hover': {
			backgroundColor: `${colr.high}`,
		},
	};
};

const theme = createTheme(defautTheme, {
	direction: 'ltr',
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#FFF',
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					transition: defautTheme.transitions.create(),
				},
			},
		},
		MuiCardMedia: {
			styleOverrides: {
				root: {
					transition: defautTheme.transitions.create(['all'], {
						easing: 'ease-in-out',
					}),
				},
			},
		},
		MuiButtonBase: {
			styleOverrides: {
				root: {
					fontFamily: 'poppins',
					fontStyle: 'normal',
					fontWeight: 500,
					fontSize: '14px',
					textTransform: 'capitalize',
					lineHeight: '21px',
					transition: defautTheme.transitions.create(['all'], {
						duration: 150,
					}),
				},
			},
			variants: [
				{
					props: { variant: 'main' },
					style: customBtnStyle,
				},
			],
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
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: '10px',
				},
			},
		},
		MuiLoadingButton: {
			variants: [
				{
					props: { variant: 'main' },
					style: customBtnStyle,
				},
			],
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
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
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
			fontSize: '37.32px',
			color: defautTheme.palette.primary.main,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
		},
		h3: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 900,
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
			fontWeight: 400,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
			// lineHeight: '1.6rem',
		},
		body2: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 400,
			color: defautTheme.palette.primary.light,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
			// lineHeight: '1.6rem',
		},
		subtitle1: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 500,
			[defautTheme.breakpoints.between('xs', 'sm')]: {},
			[defautTheme.breakpoints.up('md')]: {},
			// lineHeight: '1.6rem',
		},
		subtitle2: {
			fontFamily: 'poppins',
			fontStyle: 'normal',
			fontWeight: 500,
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
