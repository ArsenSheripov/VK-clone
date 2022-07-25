import React, { } from 'react'
import { Link } from 'react-router-dom'
import { FRIENDS_ROUTE, MESSAGES_ROUTE, MYPAGE_ROUTE } from '../../../router/consts'
import cl from "./sidebar.module.scss";

const Sidebar = () => {

	const sidebarRoutes = [
		{ pageName: 'Моя страница', path: MYPAGE_ROUTE },
		{ pageName: 'Сообщения', path: MESSAGES_ROUTE },
		{ pageName: 'Друзья', path: FRIENDS_ROUTE },
	]

	return (
		<div className={cl.sidebar}>
			{sidebarRoutes.map(page =>
				<Link
					to={page.path}
					className={cl.sidebar__item}
				>
					{page.pageName}
				</Link>
			)}
		</div>
	)
}

export default Sidebar