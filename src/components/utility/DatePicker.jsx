import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { moveInDateFilter } from "../../store/filterSlice";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function DatePickerComponent(){
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex flex-col w-36 text-sm flex justify-center">
			<p className="font-medium text-gray-400 text-sm">Move In Date</p>

      <DatePicker selected={startDate} minDate={new Date()} onChange={(date) => {
        setStartDate(date)
        dispatch(moveInDateFilter(date));
      }} />
    </div>
  );
};