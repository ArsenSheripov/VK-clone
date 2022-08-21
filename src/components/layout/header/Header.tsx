import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks'
import { removeUser } from '../../../store/slices/userSlice'
import cl from './header.module.scss'
import defaultAvatar from '../../../assets/defaultAvatar.jpg';
import logo from "../../../assets/vk-logo.svg";
import AppBtn from '../../UI/button/AppBtn'
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../../router/consts';

const Header = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(state => state.user)
	const [menuVisible, setMenuVisible] = useState(false);


	const toggleMenuVisible = () => {
		setMenuVisible(current => !current);
	};

	return (
		<header className={cl.header}>
			<div className={`${cl.header__container} container`}>
				<Link to={HOME_ROUTE} className={cl.header__logo}><img src={logo} alt="logo" width={150} /></Link>

				<div>
					<div
						className={cl.header__user}
					>
						<button
							className={cl.header__trigger}
							onClick={toggleMenuVisible}
						>
							<img className={cl.header__userAvatar} src={user.photoURL ? user.photoURL : defaultAvatar} width={40} height={40} />
							<span><i className={menuVisible ? "arrow up" : "arrow down"}></i></span>
						</button>
						<div className={menuVisible ? cl.header__menu_active : cl.header__menu}>
							<p className={cl.header__userName}>{user.email}</p>
							<AppBtn
								onClick={() => dispatch(removeUser())}
							>
								Выйти
							</AppBtn>
						</div>
					</div>
				</div>
			</div>
		</header >
	)
}

export default Header;