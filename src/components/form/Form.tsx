import React, { FC, useState } from 'react';
import AppBtn from '../UI/button/AppBtn';
import AppInput from '../UI/input/AppInput';
import cl from "./form.module.scss";

interface FormProps {
	title: string
	handleClick: (email: string, password: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<form className={cl.form} onSubmit={(e) => handleSubmit(e)}>
			<AppInput
				type="text"
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder="email"
			/>
			<AppInput
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder="password"
			/>
			<AppBtn
				onClick={() => handleClick(email, password)}
			>
				{title}
			</AppBtn>
		</form >
	)
}

export default Form
