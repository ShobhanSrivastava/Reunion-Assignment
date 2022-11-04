import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import { useDispatch, useSelector } from "react-redux";
import { budgetFilter } from "../../store/filterSlice";

export default function PriceSlider() {
    const dispatch = useDispatch();
	const currValue = useSelector(state => state.filter.budget)
    const handleOnChange = (value) => {
        dispatch(budgetFilter(value));
    }

	return (
        <div className="flex flex-col items-center w-36 m-4">
			<p className="font-medium text-gray-400 text-sm">Budget</p>
            <p className="font-medium text-gray-500 text-md">${currValue}</p>

            <Slider
                value={currValue}
                onChange={handleOnChange}
                defaultValue={1500}
                min={0}
                max={3000}
                step={500}
                dots
            />
        </div>
	);
}
