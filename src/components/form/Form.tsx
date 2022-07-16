import React, { FC, useState } from 'react';

interface FormProps {
	title: string
	handleClick: (email: string, password: string) => void
}

const Form: FC<FormProps> = ({ title, handleClick }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form>
			<input
				type="text"
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder="email"
			/>
			<input
				type="password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder="password"
			/>
			<button
				onClick={() => handleClick(email, password)}
			>
				{title}
			</button>
		</form>
	)
}

export default Form
