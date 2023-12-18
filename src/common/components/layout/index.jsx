/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';
import { Footer } from './footer';

export const Layout = () => {
	return (
		<>
			<Navbar />
			<div>
				<Outlet />
			</div>
			<Footer />
		</>
	);
};
