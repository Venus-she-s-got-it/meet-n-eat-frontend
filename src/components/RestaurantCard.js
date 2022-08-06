import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const RestaurantCard = ({ restaurant }) => {
    const { name, image_url, display_phone, price  } = restaurant
    const city = restaurant.location.city
    const state = restaurant.location.state
    const categoriesArr = []
    useEffect(() => {
        for (let i=0; i < restaurant.categories[i].length; i++) {
            categoriesArr.push(restaurant.categories[i].title)
        }
    }, [])
if (!restaurant) {
    return null
}
return (
    <Container className="fluid">
        <Card className ="py-1 px-1">
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
                        <p>{categoriesArr}</p>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    </Container>
)
}

export default RestaurantCard