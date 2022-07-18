import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../components/signin/SignIn'
import { REGISTER_ROUTE } from '../../router/consts'
import cl from "./loginPage.module.scss";

const LoginPage: FC = () => {
	return (
		<div className={cl.loginPage}>
			<h1 className={cl.loginPage__title}>Login</h1>
			<SignIn />
			<p className={cl.loginPage__register}>
				or <Link to={REGISTER_ROUTE}>register</Link>
			</p>
		</div>
	)
}

export default LoginPage;