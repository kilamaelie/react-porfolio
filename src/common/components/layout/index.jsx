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
