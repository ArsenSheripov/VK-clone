import React, { useState } from 'react';
import cl from './myPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { getAuth, updateProfile } from 'firebase/auth';
import { setUserName, setUserPhoto } from '../../store/slices/userSlice';

const MyPage = () => {
	const [name, setName] = useState('')
	const [photo, setPhoto] = useState('')
	const user = useAppSelector(state => state.user)
	const auth = getAuth();
	const dispatch = useAppDispatch()

	const handleChangePhoto = () => {
		if (photo) {
			console.log('changed photo');
		}

		//@ts-ignore
		updateProfile(auth.currentUser, {
			photoURL: photo,
		}).then((photoURL) => {
			// Profile updated!
			// ...
			dispatch(setUserPhoto({
				photoURL: photoURL
			}))
		}).catch((error) => {
			// An error occurred
			// ...
			alert(error.message)
		});
	}

	const handleChangeName = () => {
		//@ts-ignore
		updateProfile(auth.currentUser, {
			displayName: name,

		}).then((name) => {
			// Profile updated!
			// ...
			dispatch(setUserName({
				displayName: name
			})

			)
		}).catch((error) => {
			// An error occurred
			// ...
			alert(error.message)
		});
		console.log(name)

	}

	return (
		<div className={cl.myPage}>
			<img src={user.photoURL} className={cl.myPage__avatar} alt="avatar" />

			<input
				type="file"
				value={photo}
				onChange={(e) => setPhoto(e.target.value)}
			/>
			<button onClick={handleChangePhoto}>change photo</button>
			<span className={cl.myPage__email}>{user.email}</span>

			<h1>{user.name}</h1>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={handleChangeName}>change name</button>
		</div>
	)
}

export default MyPage;