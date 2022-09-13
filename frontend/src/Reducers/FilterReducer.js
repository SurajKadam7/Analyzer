import { createSlice } from '@reduxjs/toolkit';

const filterState = {
	showStatus: false,
	showDifficulty: false,
	assending: true,
};

const filterSlice = createSlice({
	name: 'filter',
	initialState: filterState,
	reducers: {
		statusFilter(state) {
			state.showStatus = !state.showStatus;
		},
		difficultyFilter(state) {
			state.showDifficulty = !state.showDifficulty;
		},
		orderFilter(state) {
			state.assending = !state.assending;
		},
	},
});

export const filterAction = filterSlice.actions;

const filterSliceReducer = filterSlice.reducer;

export default filterSliceReducer;
