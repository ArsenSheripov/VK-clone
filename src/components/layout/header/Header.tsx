import React from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { removeUser } from '../../../store/slices/userSlice'
import AppBtnAlt from '../../UI/button/AppBtnAlt'
import cl from './header.module.scss'

const Header = () => {
	const dispatch = useAppDispatch()
	return (
		<header className={cl.header}>
			<div className={`${cl.header__container} container`}>
				<a>Вконтакте</a>
				<AppBtnAlt
					onClick={() => dispatch(removeUser())}
				>Выйти</AppBtnAlt>
			</div>
		</header>
	)
}

export default Header;