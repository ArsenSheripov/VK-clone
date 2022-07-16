import React from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { removeUser } from '../../../store/slices/userSlice'

const Header = () => {
	const dispatch = useAppDispatch()
	return (
		<div>
			header
			<button
				onClick={() => dispatch(removeUser())}
			>remove user</button>
		</div>
	)
}

export default Header