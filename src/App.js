/* eslint-disable react/jsx-curly-brace-presence */
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import Loader from './common/components/loader';
import { Footer } from './common/components/footer';
import { Navbar } from './common/components/navbar';

const App = () => {
	const Home = lazy(() => import('./common/components'));
	const NoMatch = lazy(() => import('./common/components/noMatch'));

	const ElementSuspense = (Children) => (
		<Suspense fallback={<Loader />}>{Children}</Suspense>
	);

	return (
		<>
			<Navbar />
			<Routes>
				<Route element={ElementSuspense(<Home />)} index />
				<Route path="*" element={ElementSuspense(<NoMatch />)} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
