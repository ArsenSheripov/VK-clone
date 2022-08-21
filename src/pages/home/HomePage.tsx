import React, { } from 'react';
import AddPost from './AddPost';
import PostList from './PostList';
import cl from './home.module.scss';

const HomePage = () => {


	return (
		<div className={cl.home}>
			<AddPost />
			<PostList />
		</div>
	)
}

export default HomePage;
