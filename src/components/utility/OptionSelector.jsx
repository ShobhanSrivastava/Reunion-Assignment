import React, { useState } from "react";
// import { useDetectClickOutside } from "react-detect-click-outside";

import { useSelector, useDispatch } from "react-redux";
import { locationFilter, propertyTypeFilter } from "../../store/filterSlice";
// import { filterClicked, filterClickedAgain } from "../store/fliterClickSlice";

const OptionSelector = ({ optionName, options, filterHeading }) => {
	const filterData = useSelector(state => state.filter);
	// const clickData = useSelector(state => state.click);
	const [clicked, setClicked] = useState(false);
	
	const dispatch = useDispatch();

	const handleAddFilter = (e) => {
		switch(filterHeading){
			case 'location':
				dispatch(locationFilter(e.target.value));
				break;
			case 'propertyType':
				dispatch(propertyTypeFilter(e.target.value));
				break;
			default:
		}
	}

	return (
		<div 
		// onClick={handleClick}
			className="hover:cursor-pointer relative flex flex-col items-center justify-center px-2 h-[90%] m-1 z-100 rounded-lg">
			<p className="font-medium text-gray-400 text-sm">{optionName}</p>

			<select className="decoration-none rounded-lg bg-white min-w-[180px] max-w z-100 space-y-1 overflow-y-scroll max-h-[200px] z-10 w-max p-2 border camelCase border-black overflow-y-scroll"
			value={filterData[filterHeading]}
			onChange={handleAddFilter}>
				{options.map(option => {
					return (
					<option className="mx-3">
						{option}
					</option>)
				})}
			</select>
		</div>
	);
};

export default OptionSelector;
