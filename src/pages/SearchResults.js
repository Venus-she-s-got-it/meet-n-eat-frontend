import React, { useContext, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { UrlContext } from '../App';
import RestaurantCard from '../components/RestaurantCard'
import Search from '../components/Search'
import { Container } from 'react-bootstrap'
// import { set } from 'mongoose';


const SearchResults = () => {
    const url = useContext(UrlContext)
    const { searchString } = useParams()
    const [ searchParams ] = useSearchParams()
    const [restaurantsData, setRestaurantsData] = useState(null) 
    // const [likedRestaurants, setLikedRestaurants] = useState()
    // const [usersLikes, setUsersLikes] = useState()
    searchParams.forEach((entry) => console.log(entry))

    useEffect(() => {
        axios.get(`${url}/restaurants/`)
        // axios.get(`${url}/restaurants/${searchString}`)
            .then((res, err) => { 
                if (res.status === 404) {
                    console.log(err)
                } else if(res.status === 200 || res.status === 304) {
                    return res.data
                }
            })
            .then((data) => {
                setRestaurantsData(data)
            }) 
        }, [])

        // to update users likedrestaurants onClick
        // useEffect(() => {
        // // const likes = { likedrestaurants: {...likedrestaurants, }}
        // axios.put(`${url}/users/:id`)
        //     .then((res, err) => {
        //         if (res.status === 404) {
        //             console.log(err)
        //         } else if (res.status === 200 || res.status === 304) {
        //             return res.data
        //         }
        //     })
        //     .then((data) => {
        //         setLikedRestaurants()
        //     })
        // }, [])
    if (!restaurantsData) {
        return <h1>Loading restaurants...</h1>
    }
        return (
            <Container>
                <Container>
                    <Search />
                </Container>
                {restaurantsData.map(restaurantData => <RestaurantCard restaurant={restaurantData} key={restaurantData._id}/>)
                }
            </Container>
        )
}

export default SearchResults