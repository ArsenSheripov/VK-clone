import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'
import HomePage from '../pages/home/HomePage';
import RegisterPage from '../pages/register/RegisterPage';
import Register from '../pages/register/RegisterPage';
import { privateRoutes, publicRoutes } from '../router/routes';

const AppRouter = () => {
	const { isAuth, email } = useAuth();
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
				<Route path="*" element={<RegisterPage />} />
			</Routes>
	)
}

export default AppRouter