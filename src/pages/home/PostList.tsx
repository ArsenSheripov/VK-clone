import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { IPost } from '../../types/IPost';
import PostItem from './PostItem';
import cl from './home.module.scss';

interface IPosts {
	posts: IPost[]
}

const PostList: FC<IPosts> = ({ posts }) => {
	return (
		<div className={cl.home__postList}>
			{posts.map(post =>
				<PostItem post={post} />
			)}

		</div>

	)
}

export default PostList
