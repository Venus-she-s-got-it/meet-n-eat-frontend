import React from 'react';
import { useParams } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard'


const SearchResults = () => {
    const { searchString } = useParams()
    console.log(searchString)
    return (
        <div>
           {searchString
           ? <RestaurantCard />
            : <p>No matches found</p>} 
        </div>
    )
}

export default SearchResults