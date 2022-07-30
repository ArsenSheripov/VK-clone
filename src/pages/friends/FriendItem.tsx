import React, { FC } from 'react'
import { IUser } from '../../types/IUser';
import cl from './friends.module.scss';

interface FriendItemProps {
	friend: IUser
}


const FriendItem: FC<FriendItemProps> = ({ friend }) => {
	return (
		<div className={cl.friends__item}>
			<div className={cl.friends__avatar}>
				<img src={friend.avatar} alt="avatar" />
				{friend.isInNetwork ? <span className={cl.friends__network}></span> : false}
			</div>
			<span className={cl.friends__name}>{friend.email}</span>
		</div>
	)
}

export default FriendItem;
