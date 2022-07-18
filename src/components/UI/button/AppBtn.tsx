import React, { ButtonHTMLAttributes, FC } from 'react'
import cl from './appBtn.module.scss';

interface AppBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const AppBtn: FC<AppBtnProps> = ({ children, ...props }) => {
	return (
		<button {...props} className={cl.appBtn}>
			{children}
		</button>
	)
}
export default AppBtn;
