import { createSlice } from "@reduxjs/toolkit";

const listingSlice = createSlice({
	name: "listings",
	// initialState: []
    initialState: {
        originalListing: [],
        filteredListing: []
    },
	reducers: {
		updateListings(state, action) {
			return {originalListing: action.payload, filteredListing: action.payload};
		},
        updateFilteredListings(state, action) {
            return {...state, filteredListing: action.payload}
        }
	},
});

export const { updateListings, updateFilteredListings } = listingSlice.actions;
export default listingSlice.reducer;
