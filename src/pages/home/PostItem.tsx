import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../../types/IPost';
import cl from './home.module.scss';

interface PostItemProps {
	post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	return (
		<div className={cl.home__postItem}>
			<Link to={`/profile/${post.author.id}`}>
				<img
					className={cl.home__avatar}
					src={post.author.avatar} alt="avatar"
				/>
				<span
					className={cl.home__authorName}
				>
					{post.author.name}
				</span>
				<span
					className={cl.home__createdAt}
				>
					{post.createdAt}
				</span>
			</Link>
			<p>{post.content}</p>
			{post.images?.length && (
				<div className={cl.home__postImages}>
					{post.images.map(image =>
						<div className={cl.home__img} key={image}>
							<img src={image} alt="none" />
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default PostItem
