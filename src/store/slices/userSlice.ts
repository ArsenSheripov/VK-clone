import { createSlice } from "@reduxjs/toolkit"
import defaultAvatar from '../../assets/defaultAvatar.jpg';

const initialState = {
	email: null,
	token: null,
	photoURL: defaultAvatar,
	id: null,
	name: 'usernamee'
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.id = action.payload.id;
		},
		setUserPhoto(state, action) {
			state.photoURL = action.payload.photoURL
		},
		setUserName(state, action) {
			state.name = action.payload.name
		},
		removeUser(state) {
			state.email = null;
			state.token = null;
			state.id = null;
		},
	},
})

export const { setUser, setUserPhoto, setUserName, removeUser } = userSlice.actions;

export default userSlice.reducer;