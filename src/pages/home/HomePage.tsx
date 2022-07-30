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


	return (
		<div className={cl.home}>
			<AddPost />
			<PostList />
		</div>
	)
}

export default HomePage;
