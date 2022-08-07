import React, { useContext, useParams, useEffect, useState } from 'react'
import axios from 'axios'
import { UrlContext } from '../App'
import RestaurantCard from '../components/RestaurantCard'
import Reviews from '../components/Reviews'
import Review from '../components/Review'
import { Card, Container, Image, Col, Row, Form } from 'react-bootstrap'

// /restaurants/:restaurantId
const RestaurantDetail = () => {
    const url = useContext(UrlContext)
    const [resDetails, setResDetails] = useState(null)
    const [categories, setCategories] = useState()
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
                setResDetails(data)
                console.log(resDetails)
            }) 
        }, [])
    
if (resDetails) {
const address = `${resDetails.location.address1}, ${resDetails.location.city}, ${resDetails.location.state}` 
    
return (
    <Container>
    <Card className="border-dark fluid px-2 py-2">
        <Row>
        <Col>
        <h1>{resDetails.name}</h1>
        <Image 
        src={resDetails.image_url}
        alt="restaurant-image"
        width={200}
        height={200} />
        <p>{resDetails.display_phone}</p>
        <p>{address}</p>
        </Col>
        <Col>
        <h3>About {resDetails.name}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Rating Stars</p>
        <p>{resDetails.price}</p>
        </Col>
        </Row>
        <Row>
            <Col md={4}>
        <h4>Reviews</h4>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
        <button>Submit Review</button>
        </Col>
        </Row>

        <Reviews />
    </Card>
    </Container>
)
}}

export default RestaurantDetail