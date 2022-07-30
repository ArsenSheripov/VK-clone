import React, { FC, useState } from 'react';
import AppBtn from '../../components/UI/button/AppBtn';
import AppInput from '../../components/UI/input/AppInput';
import { IPost } from '../../types/IPost';
import { TypeSetState } from '../../types/TypeSetState';
import { IUser } from "../../types/IUser";
import cl from './home.module.scss';
import defaultAvatar from '../../assets/defaultAvatar.jpg';
import { useAppSelector } from '../../hooks/reduxHooks';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';




const AddPost: FC = () => {
	const [content, setContent] = useState('')
	const user = useAppSelector(state => state.user)

	const addPostHandler = async () => {
		try {
			const docRef = await addDoc(collection(db, "posts"), {
				author: user,
				content,
				createdAt: '10 min nazad',
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	return (
		<div className={cl.home__addPost}>
			<AppInput
				type='text'
				value={content}
				onChange={e => setContent(e.target.value)}
			/>
			<AppBtn onClick={() => addPostHandler()}>
				Создать
			</AppBtn>
		</div>
	)
}

export default AddPost;