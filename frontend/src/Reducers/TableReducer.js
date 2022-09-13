import { createSlice } from '@reduxjs/toolkit';

const tableState = { showFullScreen: false, tableData: [] };
const tableSlice = createSlice({
	name: 'table',
	initialState: tableState,
	reducers: {
		fullScreen(state) {
			state.showFullScreen = !state.showFullScreen;
		},
		tableData(state, actions) {
			state.tableData = actions.payload;
		},
	},
});

export const tableAction = tableSlice.actions;

const tableSliceReducer = tableSlice.reducer;
export default tableSliceReducer;
