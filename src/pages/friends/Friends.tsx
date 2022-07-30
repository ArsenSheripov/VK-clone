import React from 'react';
import { IUser } from '../../types/IUser';
import defaultAvatar from '../../assets/defaultAvatar.jpg';
import cl from './friends.module.scss';
import FriendItem from './FriendItem';

const Friends = () => {
	const friends: IUser[] = [
		{ id: '2', avatar: defaultAvatar, email: 'Halid', isInNetwork: true },
		{ id: '3', avatar: defaultAvatar, email: 'Mar`am', isInNetwork: true },
		{ id: '4', avatar: defaultAvatar, email: 'Zaur', isInNetwork: true },
		{ id: '5', avatar: defaultAvatar, email: 'Madina', isInNetwork: true },
	]
	return (
		<div className={cl.friends}>
			{friends.map(friend =>
				<FriendItem key={friend.id} friend={friend} />
			)}
		</div>
	)
}

export default Friends;
