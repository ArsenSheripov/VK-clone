import Home from '../pages/home/HomePage'
import Login from '../pages/login/LoginPage'
import Register from '../pages/register/RegisterPage'
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from './consts'

export const privateRoutes = [
	{ path: HOME_ROUTE, component: <Home /> },
	{ path: LOGIN_ROUTE, component: <Login /> },
]

export const publicRoutes = [
	{ path: LOGIN_ROUTE, component: <Login /> },
	{ path: REGISTER_ROUTE, component: <Register /> },
]