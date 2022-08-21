import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import React, { FC, useEffect, useState } from 'react'
import { IMessage } from '../../types/IMessage'
import { db } from '../../firebase';
import { useAppSelector } from '../../hooks/reduxHooks';

const Messages: FC = () => {
	const [message, setMessage] = useState()
	const [messages, setMessages] = useState<IMessage[]>([])
	const user = useAppSelector(state => state.user)

	useEffect(() => {
		const unsub = onSnapshot(collection(db, 'messages'), doc => {

			doc.forEach((d: any) => {
				setMessages(prev =>
					[...prev, d.data()]
				)
			});
		})

		return () => {
			unsub()
		}

	}, [])


	const addMessageHandler = async () => {
		try {
			const docRef = await addDoc(collection(db, "messages"), {
				author: user,
				message,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}


	return (
		<div>
			messdfaas
		</div>
	)
}

export default Messages
