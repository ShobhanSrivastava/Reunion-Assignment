import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import listingSlice from "./listingSlice";

const store = configureStore({
	reducer: {
		filter: filterSlice,
        listings: listingSlice,
	},
});

export default store;
