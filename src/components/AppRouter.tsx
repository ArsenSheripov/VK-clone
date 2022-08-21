import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import HomePage from '../pages/home/HomePage';
import LoginPage from '../pages/login/LoginPage';
import { privateRoutes, publicRoutes } from '../router/routes';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from 'firebase/auth';
import Loader from '../components/loader/Loader';

const AppRouter = () => {
	const auth = getAuth()
	const { isAuth, email } = useAuth();
	const [user, loading, error] = useAuthState(auth)

	if (loading) {
		console.log('loading');
		return (<Loader />)
	}

	return (
		isAuth
			?
			<Routes>
				{privateRoutes.map(route =>
					<Route
						path={route.path}
						element={route.component}
						key={route.path}
					/>
				)}
				<Route path="*" element={<HomePage />} />
			</Routes>
			:
			<Routes>
				{publicRoutes.map(route =>
					<Route
						path={route.path}
						element={route.component}
						key={route.path}
					/>
				)}
				<Route path="*" element={<LoginPage />} />
			</Routes>
	)
}

export default AppRouter