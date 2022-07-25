import React, { useState } from 'react'
import { IPost } from '../../types/IPost'
import AddPost from './AddPost'

const HomePage = () => {
	const [posts, setPosts] = useState<IPost[]>([])

	return (
		<div>
			<AddPost setPosts={setPosts} />
		</div>
	)
}

export default HomePage;
