import React from "react";
import OptionSelector from "./utility/OptionSelector";
import { useSelector, useDispatch } from "react-redux";

import { updateFilteredListings } from "../store/listingSlice";
import listingData from "../data";
import PriceSlider from "./utility/PriceSlider";
import 'react-day-picker/dist/style.css';
import DatePickerComponent from "./utility/DatePicker";

const FilterBar = () => {
  const dispatch = useDispatch();
  const listings = useSelector(state => state.listings.originalListing)
  const filterData = useSelector(state => state.filter)

  const applyFilters = (listing) => {
    if(applyLocationFilter(listing) && applyPropertyTypeFilter(listing) && applyBudgetFilter(listing) && applyDateFilter(listing)){
      return true;
    }

    return false;
  }

  const applyLocationFilter = (listing) => {
    if(filterData.location == "Select"){
      return true;
    }
    else{
      return listing.address.city == filterData.location;
    }
  }

  const applyPropertyTypeFilter = (listing) => {
    if(filterData.propertyType == "Select"){
      return true;
    }
    else{
      return listing.homeType == filterData.propertyType;
    }
  }

  const applyBudgetFilter = (listing) => {
    if(filterData.budget == "Select"){
      return true;
    }
    else{
      return listing.price <= filterData.budget;
    }
  }

  const applyDateFilter = (listing) => {
    if(Date.parse(filterData.moveInDate)-15778800000 <= Date.parse(listing.datePostedString)){
      return true;
    }
  }

  const handleClick = () => {
    console.log(listings);
    const filteredListings = listings.filter(applyFilters);
    dispatch(updateFilteredListings(filteredListings));
  }

	return (
		<div className="flex items-center px-5 justify-between h-28 border rounded-xl mx-5 mt-10 shadow-lg bg-white">
			<OptionSelector
				optionName="Property Type"
				options={listingData.apartmentTypes}
				filterHeading="propertyType"
			/>
			<OptionSelector
				optionName="Location"
				options={listingData.cities}
				filterHeading="location"
			/>
      <PriceSlider />
      <DatePickerComponent />
			<button
				className="bg-[#7065F0] px-4 py-2 h-max mx-2 text-white rounded-lg shadow-lg"
				onClick={handleClick}>
				Apply
			</button>
		</div>
	);
};

export default FilterBar;
