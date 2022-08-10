import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { UrlContext } from '../App';
import RestaurantCard from '../components/RestaurantCard'
import Search from '../components/Search'
import { Container } from 'react-bootstrap'
import { axiosReducer } from '../data-and-functions/axiosAll';
import { buildSearchParams } from '../data-and-functions/searchParams';


const SearchResults = () => {
    const { url } = useContext(UrlContext)
    const { searchString } = useParams()
    const [ searchParams ] = useSearchParams()
    const [restaurantsData, dispatch] = useReducer(axiosReducer, { response: null, searchString: '' })
    // const [likedRestaurants, setLikedRestaurants] = useState()
    // const [usersLikes, setUsersLikes] = useState()
    useEffect(() => {
        let params = [], values = []
        for(const entry of searchParams.entries()) {
            const [param, value] = entry
            params.push(param)
            values.push(value)
            console.log('params, values', params, values)
            // Push param and value into restaurantsData.searchString on each pass
        }
        dispatch({
            key: 'searchString',
            value: buildSearchParams(params, values)
        })
        console.log(restaurantsData)
    },[])

    // useEffect(() => {
    //     axios.get(`${url}/restaurants/`)
    //     // axios.get(`${url}/restaurants/${searchString}`)
    //         .then((res, err) => { 
    //             if (res.status === 404) {
    //                 console.log(err)
    //             } else if(res.status === 200 || res.status === 304) {
    //                 return res.data
    //             }
    //         })
    //         .then((data) => {
    //             setRestaurantsData(data)
    //         }) 
    //     }, [])

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
                <Container style={{ display:'flex', flexDirection:'row', flexWrap:'wrap', width:'100%', alignItems:'center', justifyContent:'center'}}>
                    {/* {restaurantsData.map(restaurantData => <RestaurantCard restaurant={restaurantData} key={restaurantData._id}/>)} */}
                </Container>
            </Container>
        )
}

export default SearchResults