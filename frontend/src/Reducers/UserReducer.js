import { createSlice } from '@reduxjs/toolkit';
const data = localStorage.getItem('token');
const token = data ? JSON.parse(data) : null;

const authState = { logged: token ? true : false, token };
const user = createSlice({
	name: 'authentication',
	initialState: authState,
	reducers: {
		loggedIn(state) {
			state.logged = true;
		},
		loggedOut(state) {
			state.logged = false;
		},

		token(state, actions) {
			state.token = actions.payload;
		},
	},
});

export const userAction = user.actions;

const userSliceReducer = user.reducer;
export default userSliceReducer;
