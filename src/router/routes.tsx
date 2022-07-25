import Friends from '../pages/friends/Friends';
import Home from '../pages/home/HomePage';
import Login from '../pages/login/LoginPage';
import Messages from '../pages/messages/Messages';
import MyPage from '../pages/myPage/MyPage';
import Register from '../pages/register/RegisterPage';
import { FRIENDS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, MESSAGES_ROUTE, MYPAGE_ROUTE, REGISTER_ROUTE } from './consts'

export const privateRoutes = [
	{ path: HOME_ROUTE, component: <Home /> },
	{ path: MYPAGE_ROUTE, component: <MyPage /> },
	{ path: MESSAGES_ROUTE, component: <Messages /> },
	{ path: FRIENDS_ROUTE, component: <Friends /> },
]

export const publicRoutes = [
	{ path: LOGIN_ROUTE, component: <Login /> },
	{ path: REGISTER_ROUTE, component: <Register /> },
]