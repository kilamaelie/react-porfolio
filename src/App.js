/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { Suspense, lazy } from 'react';
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import Loader from 'common/components/loader';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'common/components/layout';

const App = () => {
	const Home = lazy(() => import('common/components'));
	const NoMatch = lazy(() => import('common/components/noMatch'));

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
