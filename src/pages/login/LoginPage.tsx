import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import SignIn from '../../components/signin/SignIn'
import { REGISTER_ROUTE } from '../../router/consts'

const LoginPage: FC = () => {
	return (
		<div>
			<h1>Login</h1>
			<SignIn />
			<p>
				or <Link to={REGISTER_ROUTE}>register</Link>
			</p>
		</div>
	)
}

export default LoginPage;