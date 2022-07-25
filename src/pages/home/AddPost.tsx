import React, { FC, useState } from 'react';
import AppBtn from '../../components/UI/button/AppBtn';
import AppInput from '../../components/UI/input/AppInput';
import { IPost } from '../../types/IPost';
import { TypeSetState } from '../../types/TypeSetState';
import { IUser } from "../../types/IUser";

interface IAddPost {
	setPosts: TypeSetState<IPost[]>
}


const AddPost: FC<IAddPost> = ({ setPosts }) => {
	const [content, setContent] = useState('')

	const users = [{
		id: 1,
		avatar: 'avatar',
		name: 'name',
		isInNetwork: true
	}];
	const addPostHandler = () => {
		setPosts(prev => [...prev, {
			author: users[0],
			content,
			createdAt: '5 minuts ago',
		},
		])

	}

	return (
		<div>
			<AppInput
				type='text'
				value={content}
				onChange={e => setContent(e.target.value)}
			/>
			<AppBtn onClick={() => addPostHandler()} />
		</div>
	)
}

export default AddPost;