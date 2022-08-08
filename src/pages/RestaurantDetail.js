import React, { useContext, useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import axios from 'axios'
import { UrlContext } from '../App'
import RestaurantCard from '../components/RestaurantCard'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import { Card, Container, Col, Row, } from 'react-bootstrap'

// /restaurants/:restaurantId
const RestaurantDetail = () => {

    // State hooks and variable declarations
    // ===========================================================================
    const url = useContext(UrlContext)
    const [resDetails, setResDetails] = useState(null)
    const { restaurantId } = useParams()

    // Getting restaurant data by restaurantId
    // ===========================================================================
    useEffect(() => {
        axios.get(`${url}/restaurants/${restaurantId}`)
            .then((res, err) => { 
                if (res.status === 404) {
                    console.log(err)
                } else if(res.status === 200 || res.status === 304) {
                    return res.data
                }
            })
            .then((data) => {
                setResDetails(data)
            }) 
        }, [])

    // Event Handler for submitting review
    function submitHandler() {
        <Navigate to={<ReviewForm />}/>
    }
 // conditional rendering & once resDetails is rendered, address variable declaration   
if (resDetails) {
const address = `${resDetails.location.address1}, ${resDetails.location.city}, ${resDetails.location.state}` 
    
return (
    <Container>
    <Card className="border-dark fluid px-2 py-2">
        <Row>
            <Col>
                <RestaurantCard restaurant={resDetails} />
                <p>{address}</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <h4>Reviews</h4>
                    </Col>
                    <Col>
                    <button 
                    type="submit"
                    onClick={submitHandler}
                    >Submit review
                    </button>
                    </Col>
                </Row>
                <Reviews />
            </Col>
        </Row>
    </Card>
    </Container>
)
}}

export default RestaurantDetail