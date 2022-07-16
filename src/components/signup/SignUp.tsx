import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from '../form/Form';
import { setUser } from '../../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { HOME_ROUTE } from '../../router/consts';
import { useAppDispatch } from '../../hooks/reduxHooks';

const SignUp = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleRegister = (email: string, password: string) => {
		const auth = getAuth()
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				dispatch(setUser({
					email: user.email,
					token: user.refreshToken,
					id: user.uid
				}))
				navigate(HOME_ROUTE)
			})
			.catch(console.error);
	}


	return (
		<Form
			title={"Sign up"}
			handleClick={handleRegister}
		/>
	)
}

export default SignUp
