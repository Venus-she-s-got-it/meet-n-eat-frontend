import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { UrlContext } from '../App';
import RestaurantCard from '../components/RestaurantCard'
import Search from '../components/Search'
import { Container } from 'react-bootstrap'
import { axiosAll, axiosReducer } from '../data-and-functions/axiosAll';
import { buildSearchParams } from '../data-and-functions/searchParams';


const SearchResults = () => {
    const { url } = useContext(UrlContext)
    const { searchString } = useParams()
    const [ searchParams ] = useSearchParams()
    const [restaurantsData, dispatch] = useReducer(axiosReducer, { response: null, searchString: '' })
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjJmNWMzMzgxNjY4NzhkYzVkNTUxZSIsImlhdCI6MTY2MDE1MDY1MSwiZXhwIjoxNjYwMjM3MDUxfQ.FT76SgYlECDCuBaQyR5w0SavnDRSJacDdTDnHXFz-vs'
    // const [likedRestaurants, setLikedRestaurants] = useState()
    // const [usersLikes, setUsersLikes] = useState()
    useEffect(() => {
        let params = [], values = []
        for(const entry of searchParams.entries()) {
            // Pull out the paramater and value on each pass
            const [param, value] = entry
            // Push param and value into arrays on each pass
            params.push(param)
            values.push(value)
        }
        // Update state with search parameters
        dispatch({
            key: 'searchString',
            value: buildSearchParams(params, values)
        })
    },[])

    useEffect(() => {
        // Make axios call to retrieve data
        axiosAll('GET', `/restaurants/results/${searchString}${restaurantsData.searchString}`, authToken, dispatch)
    },[restaurantsData.searchString])


    if (typeof restaurantsData.response !== 'object') {
        return <h1>Loading restaurants...</h1>
    } else {
        return (
            <Container>
                <Container>
                    <Search />
                </Container>
                <Container style={{ display:'flex', flexDirection:'row', flexWrap:'wrap', width:'100%', alignItems:'center', justifyContent:'center'}}>
                    {restaurantsData.response.map(restaurantData => <RestaurantCard restaurant={restaurantData} key={restaurantData._id}/>)}
                </Container>
            </Container>
        )
    }
}

export default SearchResults