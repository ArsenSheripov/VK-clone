import { IUser } from "./IUser";

export interface IPost {
	author: IUser
	createdAt: string
	content: string
	images?: string[]
}