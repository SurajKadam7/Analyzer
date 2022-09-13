import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from './Reducers/FilterReducer';
import tableSliceReducer from './Reducers/TableReducer';
import userSliceReducer from './Reducers/UserReducer';

const store = configureStore({
	reducer: {
		filter: filterSliceReducer,
		authentication: userSliceReducer,
		table: tableSliceReducer,
	},
});

export default store;

// how to use useSelector
// useSelector((state) => state.filter.(write which state you want to use))
