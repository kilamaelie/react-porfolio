import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import Loader from './common/components/loader';
import { Layout } from './common/components/layout';

const App = () => {
	const Home = lazy(() => import('./common/components'));
	const NoMatch = lazy(() => import('./common/components/noMatch'));

	const ElementSuspense = (Children) => (
		<Suspense fallback={<Loader />}>{Children}</Suspense>
	);

	return (
		<Routes>
			<Route element={<Layout />} path="/">
				<Route element={ElementSuspense(<Home />)} index />
				<Route path="*" element={ElementSuspense(<NoMatch />)} />
			</Route>
		</Routes>
	);
};

export default App;
