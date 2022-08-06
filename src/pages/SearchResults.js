import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { UrlContext } from '../App';
import RestaurantCard from '../components/RestaurantCard'


const SearchResults = () => {
    const url = useContext(UrlContext)
    const { searchString } = useParams()
    const [restaurantData, setRestaurantData] = useState(null) 
    // const [userData, setUserData] = useState(null)


    useEffect(() => {
        axios.get(`${url}/restaurants/62ed6adba46a4f49081829b9`)
        // axios.get(`${url}/restaurants/${searchString}`)
            .then((res, err) => { 
                if (res.status === 404) {
                    console.log(err)
                } else if(res.status === 200 || res.status === 304) {
                    return res.data
                }
            })
            .then((data) => {
                setRestaurantData(data)
                console.log(data)
            }) 
        }, [])
    return (
        <div>
           {restaurantData 
           ? restaurantData.map(restaurant => <RestaurantCard restaurant={restaurant}/>)
          : <p>No matches found</p>} 
        </div>
    )
}

export default SearchResults