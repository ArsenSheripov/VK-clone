import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../../components/signup/SignUp'
import { LOGIN_ROUTE } from '../../router/consts'

const RegisterPage = () => {
	return (
		<div>
			<h1>Register</h1>
			<SignUp />
			<p>
				Already have an account? <Link to={LOGIN_ROUTE}>Sign in</Link>
			</p>
		</div>
	)
}

export default RegisterPage
