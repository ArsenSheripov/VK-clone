import React, { useState } from 'react';
import { IPost } from '../../types/IPost';
import AddPost from './AddPost';
import PostList from './PostList';
import cl from './home.module.scss';
import kit from "../../assets/kit.jpg";
import leo from "../../assets/leo.jpg";
import orel from "../../assets/orel.jpg";
import ptiz from "../../assets/ptiz(2).jpg";

const HomePage = () => {
	const [posts, setPosts] = useState<IPost[]>([
		{
			author: {
				id: 'ng1',
				avatar: 'https://i.pinimg.com/280x280_RS/aa/87/f3/aa87f3803af1bac5365d7935b4ed74f4.jpg',
				name: 'National Geographic',
			},
			content: 'Afrika',
			createdAt: '15 минут назад',
			images: [ptiz, leo, kit, orel]
		}
	])

	return (
		<div className={cl.home}>
			<AddPost setPosts={setPosts} />
			<PostList posts={posts} />
		</div>
	)
}

export default HomePage;
