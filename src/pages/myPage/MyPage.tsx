import React from 'react';
import cl from './myPage.module.scss';
import { useAppSelector } from '../../hooks/reduxHooks';

const MyPage = () => {
	const user = useAppSelector(state => state.user)

	return (
		<div className={cl.myPage}>
			<img src={user.avatar} className={cl.myPage__avatar} alt="avatar" />
			<span className={cl.myPage__email}>{user.email}</span>
		</div>
	)
}

export default MyPage