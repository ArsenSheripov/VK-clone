import React, { useState } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { removeUser } from '../../../store/slices/userSlice'
import AppBtnAlt from '../../UI/button/AppBtnAlt'
import cl from './header.module.scss'
import userAvatar from '../../../assets/user.png';

const Header = () => {
	const dispatch = useAppDispatch()
	const [menuVisible, setMenuVisible] = useState(false);

	const toggleMenuVisible = () => {
		// 👇️ passed function to setState
		setMenuVisible(current => !current);
	};

	return (
		<header className={cl.header}>
			<div className={`${cl.header__container} container`}>
				<a>Вконтакте</a>

				<div>
					<div
						className={cl.header__user}
					>
						<button
							className={cl.header__trigger}
							onClick={toggleMenuVisible}
						>
							<img className={cl.header__userAvatar} src={userAvatar} width={40} height={40} />
							<span>&#8744;</span>
						</button>
						<div className={menuVisible ? cl.header__menu_active : cl.header__menu}>
							<p className={cl.header__userName}>Abdullah</p>
							<AppBtnAlt
								onClick={() => dispatch(removeUser())}
							>
								Выйти
							</AppBtnAlt>
						</div>
					</div>
				</div>
			</div>
		</header >
	)
}

export default Header;