import { IUser } from "./IUser";

export interface IPost {
	author: IUser
	content: string
	createdAt: string
	images?: string[]
}