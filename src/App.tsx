import React from 'react';
import AppRouter from './components/AppRouter';
import './App.scss';
import Layout from './components/layout/Layout';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './components/loader/Loader';

const App = () => {
	const auth = getAuth()
	const [user, loading, error] = useAuthState(auth)

	if (loading) {
		console.log('loading');
		return (<Loader />)
	}
	return (
		<Layout>
			<AppRouter />
		</Layout>
	)
}

export default App;