import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UrlContext } from '../App'
import RestaurantCard from '../components/RestaurantCard'
import Reviews from '../components/Reviews'
import { Card, Container, Col, Row, } from 'react-bootstrap'

// /restaurants/:restaurantId
const RestaurantDetail = () => {
    const url = useContext(UrlContext)
    const [resDetails, setResDetails] = useState(null)
    const { restaurantId } = useParams()
    useEffect(() => {
        axios.get(`${url}/restaurants/62ef031d30bddbafcc0ba7c5 `)
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
            }) 
        }, [])
    
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
                <Reviews />
            </Col>
        </Row>
    </Card>
    </Container>
)
}}

export default RestaurantDetail