import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IPost } from '../../types/IPost';
import PostItem from './PostItem';
import cl from './home.module.scss';
import { collection, doc, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { db } from '../../firebase';


const PostList: FC = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	useEffect(() => {
		const unsub = onSnapshot(collection(db, 'posts'), doc => {

			doc.forEach((d: any) => {
				setPosts(prev =>
					[...prev, d.data()]
				)
			});
		})

		return () => {
			unsub()
		}

	}, [])

	return (
		<div className={cl.home__postList}>
			{posts.map(post =>
				<PostItem key={post.content} post={post} />
			)}

		</div>

	)
}

export default PostList
