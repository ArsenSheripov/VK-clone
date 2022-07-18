import React, { FC, InputHTMLAttributes } from 'react'
import cl from "./appinput.module.scss";

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

const AppInput: FC<AppInputProps> = (props) => {
	return (
		<input className={cl.appInput} {...props} />
	)
}

export default AppInput
