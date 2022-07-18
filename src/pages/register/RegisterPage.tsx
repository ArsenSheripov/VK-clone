import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../../components/signup/SignUp'
import { LOGIN_ROUTE } from '../../router/consts'
import cl from './registerPage.module.scss';

const RegisterPage = () => {
	return (
		<div className={cl.registerPage}>
			<h1 className={cl.registerPage__title}>Register</h1>
			<SignUp />
			<p className={cl.registerPage__login}>
				Already have an account? <Link to={LOGIN_ROUTE}>Sign in</Link>
			</p>
		</div>
	)
}

export default RegisterPage
