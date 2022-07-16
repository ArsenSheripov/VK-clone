import React, { FC } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../form/Form';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../router/consts';
import { setUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/reduxHooks';

const SignIn: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleLogin = (email: string, password: string) => {
		const auth = getAuth()
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				dispatch(setUser({
					email: user.email,
					token: user.refreshToken,
					id: user.uid
				}))
				navigate(HOME_ROUTE)
			})
			.catch(() => alert('invalid user'));
	}

	return (
		<Form
			title={"Sign in"}
			handleClick={handleLogin}
		/>
	)
}

export default SignIn
