import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
	name: 'filter',
    
	initialState: {
		location: "Select",
		propertyType: "Select",
		budget: 3000,
		moveInDate: new Date(),
	},

	reducers: {
		locationFilter(state, action) {
			return { ...state, location: action.payload };
		},
		propertyTypeFilter(state, action) {
			return { ...state, propertyType: action.payload };
		},
		budgetFilter(state, action) {
			return { ...state, budget: action.payload };
		},
		moveInDateFilter(state, action) {
			return { ...state, moveInDate: action.payload };
		},
	},
});

export const {
	locationFilter,
	propertyTypeFilter,
	budgetFilter,
	moveInDateFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
