import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import RestaurantDetail from '../pages/RestaurantDetail';


const RestaurantCard = ({ restaurant }) => {
    const [categories, setCategories] = useState()
    const { name, image_url, display_phone, price  } = restaurant
    const city = restaurant.location.city
    const state = restaurant.location.state
    const categoriesArr = []
    for (let i=0; i < restaurant.categories.length; i++) {
        categoriesArr.push(restaurant.categories[i].title)
    }
    useEffect(() => {
        setCategories(categoriesArr)
    }, [])
    
    // event handlers
    function cardClick() {
        <Link to='restaurants/:restaurantId'></Link>
    }
if (categories) {
    return (
        <Container className="fluid">
            <Card 
            className ="py-1 px-1"
            onClick={cardClick}>
                <Row>
                    <Col>
                        <Container className="ml-1">
                            <Image 
                                src={image_url}
                                alt="restaurant-image"
                                width={200}
                                height={200}
                                />
                            <Card.Title>{name}</Card.Title>
                        </Container> 
                    </Col>
                    <Col>
                        <Card.Body>
                            <Row>
                                <Col>
                                    {/* show results from other users who've liked restaurant */}
                                    <p>Rating stars here</p>
                                </Col>
                                <Col>
                                    {/* add onClick eventHandler to update users likedrestaurants */}
                                    <button>Like Icon</button>
                                </Col>
                            </Row>
                            <p>{price}</p>
                            <p>M - F 9:00 AM - 8:00 PM</p>
                            <Row>
                                <Col>
                                    <p>{city}, {state}</p>
                                </Col>
                                <Col>
                                    <p>{display_phone}</p>
                                </Col>
                            </Row>
                            <Row>
                            {categories.map(category => (
                                <Col>
                                <p>{category}</p>
                                </Col>
                            ))}
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}}

export default RestaurantCard