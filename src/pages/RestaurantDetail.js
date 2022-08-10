import React, { useContext, useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../App'
import RestaurantCard from '../components/RestaurantCard'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import { Card, Container, Col, Row, } from 'react-bootstrap'

// /restaurants/:restaurantId
const RestaurantDetail = () => {

    // State hooks and variable declarations
    // ===========================================================================
    const { colorTemplate } = useContext(Context)
    const [resDetails, setResDetails] = useState(null)
    const { restaurantId } = useParams()

    // Getting restaurant data by restaurantId
    // ===========================================================================
    // useEffect(() => {
    //     axios.get(`${url}/restaurants/${restaurantId}`)
    //         .then((res, err) => { 
    //             if (res.status === 404) {
    //                 console.log(err)
    //             } else if(res.status === 200 || res.status === 304) {
    //                 return res.data
    //             }
    //         })
    //         .then((data) => {
    //             setResDetails(data)
    //         }) 
    //     }, [])

    // Event Handler for submitting review
    function submitHandler() {
        <Navigate to={<ReviewForm />}/>
    }
 // conditional rendering & once resDetails is rendered, address variable declaration   
if (resDetails) {
const address = `${resDetails.location.address1}, ${resDetails.location.city}, ${resDetails.location.state}` 
    
return (
    <Container>
    <Card style={{padding:'1%', borderColor:`${colorTemplate.darkColor}`, boxShadow:'-1px 3px 11px 0px rgba(0,0,0,0.75)'}}>
        <Row>
            <Col style={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
                <RestaurantCard restaurant={resDetails} />
                <p>{address}</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <Row>
                    <div style={{ display:'flex', justifyContent:'center', marginTop:'2%' }}>
                        <h4>Reviews</h4>
                    </div>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Reviews />
                <div style={{ display:'flex', justifyContent:'center', marginTop:'2%' }}>
                    <button 
                    style={{backgroundColor:'white', borderRadius:'10px', borderColor:`${colorTemplate.darkColor}`, color:`${colorTemplate.darkColor}`}}
                    type="submit"
                    onClick={submitHandler}
                    >Write a Review
                    </button>

                </div>
            </Col>
        </Row>
    </Card>
    </Container>
)
}}

export default RestaurantDetail