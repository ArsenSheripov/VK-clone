import React, { ButtonHTMLAttributes, FC } from 'react'
import cl from './appBtn.module.scss';

interface AppBtnAltProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const AppBtnAlt: FC<AppBtnAltProps> = ({ children, ...props }) => {
	return (
		<button {...props} className={cl.appBtnAlt}>
			{children}
		</button>
	)
}
export default AppBtnAlt;
