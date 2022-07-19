import React from 'react';
import AppRouter from './components/AppRouter';
import './App.scss';
import Layout from './components/layout/Layout';

const App = () => {

	return (
		<Layout>
			<AppRouter />
		</Layout>
	)
}

export default App;