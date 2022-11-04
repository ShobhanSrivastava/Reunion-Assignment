import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Listing from '../components/Listing';
import FilterBar from '../components/FilterBar';
import { updateListings } from '../store/listingSlice';

function Homepage(){
    const dispatch = useDispatch();
    const listings = useSelector(state => state.listings['filteredListing'])

    useEffect(() => {
        getListings();
    }, []);

    const getListings = async () => {
        const propertyData = await (await fetch("https://api.apify.com/v2/datasets/ZVXRXl2YRtikoNi7R/items?clean=true&format=json")).json();
        dispatch(updateListings(propertyData));
    }

    return (
        <div>
            <div className='min-h-screen overflow-y-scroll max-w-7xl'>
                <FilterBar />
                <div 
                className='my-20 grid sm:gap-x-9 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center px-5 gap-y-6'>    
                { (listings.length != 0) ?
                    listings.map(listing => {
                        return <Listing key={listing.zpid} listing={listing} />
                    })
                    :
                    <p>No results to show</p>
                }
                </div>
            </div>
        </div>
    )
}

export default Homepage;