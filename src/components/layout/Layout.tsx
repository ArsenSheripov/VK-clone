import React, { FC } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import cl from './layout.module.scss';

interface LayoutProps {
	children: any
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<div className={`${cl.layout} container`}>
				<Sidebar />
				{children}
			</div>
		</>
	)
}

export default Layout
