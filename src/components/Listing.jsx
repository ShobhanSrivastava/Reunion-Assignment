import { numberWithCommas as numToPrice } from "../utilities";
import ListingDetail from "./utility/ListingDetail";
import SparklesIcon from "@heroicons/react/20/solid/SparklesIcon";

export default function Listing({ listing }) {
	return (
		<div
			className="relative flex flex-col rounded-xl bg-white pb-2 shadow-lg">
			<img
				className="rounded-t-xl w-full h-52 object-cover z-0"
				src={listing.photos[0]}
				alt=""
			/>

			<div>
				<div className="absolute rounded-bl-sm top-[210px] -left-2 -z-8 skew-y-[18deg] h-3 w-2 bg-[#372126] flex items-center justify-center text-white uppercase text-sm tracking-wider"></div>
				<div className="absolute rounded-r-md rounded-tl-md top-[195px] p-2 -left-2 z-10 h-6 w-28 bg-[#7065F0] flex items-center justify-center text-white text-sm tracking-wide">
					<SparklesIcon className="h-4 w-4 mr-2" />
					Popular
				</div>
			</div>
			<div className="mt-4 px-5 z-10 text-black space-y-2">
				<div>
					<p className="text-[#7065F0] font-semibold text-lg">
						${numToPrice(listing.price)}
						<span className="text-gray-400/80 text-xs">/month</span>
					</p>

					<div className="text-lg text-[#372126] font-bold">
						<p className="text-sm text-gray-500">
							{listing.address.streetAddress}
						</p>
						<p>
							{listing.address.city}, {listing.address.state}
							{listing.datePostedString}
						</p>
					</div>
				</div>

				<div className="flex justify-between mt-2">
					<ListingDetail
						icon="king_bed"
						number={listing.bedrooms}
						unit="Beds"
					/>
					<ListingDetail
						icon="bathtub"
						number={listing.bathrooms}
						unit="Bathrooms"
					/>
					{listing.livingArea != null && (
						<ListingDetail
							icon="crop_7_5"
							number={listing.livingArea}
							unit="m"
							sup="2"
						/>
					)}
				</div>
			</div>
		</div>
	);
}
