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


interface IAddPost {
	setPosts: TypeSetState<IPost[]>
}


const AddPost: FC<IAddPost> = ({ setPosts }) => {
	const [content, setContent] = useState('')
	const user = useAppSelector(state => state.user)

	const users: IUser[] = [{
		id: '1',
		avatar: defaultAvatar,
		name: 'user name',
		isInNetwork: true
	}];

	const addPostHandler = async () => {
		try {
			const docRef = await addDoc(collection(db, "posts"), {
				author: users[0],
				content
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