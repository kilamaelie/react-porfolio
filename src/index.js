/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { LazyMotion, domAnimation } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './common/constant/theme';
import '@fontsource/poppins';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<LazyMotion features={domAnimation}>
				<Router>
					<App />
				</Router>
			</LazyMotion>
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
