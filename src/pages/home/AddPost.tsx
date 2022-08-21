import React, { FC, useState } from 'react';
import AppBtn from '../../components/UI/button/AppBtn';
import AppInput from '../../components/UI/input/AppInput';
import cl from './home.module.scss';
import { useAppSelector } from '../../hooks/reduxHooks';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';



const AddPost: FC = () => {
	const [content, setContent] = useState('')
	const user = useAppSelector(state => state.user)
	const [posts, loading] = useCollectionData(
		firestore.collection('posts').orderBy('createdAt')
	)

	const addPostHandler = async () => {
		try {
			const docRef = await addDoc(collection(db, "posts"), {
				author: user,
				content,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
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