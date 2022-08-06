import React from 'react';
import { Card } from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


const RestaurantCard = ({ restaurant }) => {
const { name, image_url, display_phone, location.city, location.state, display_phone, price  } = restaurant

// const categories = restaurant.categories
// 
return (
    <div>
    <Card>
        <Card.Title>{name}</Card.Title>  
        <Card.Subtitle></Card.Subtitle>
        <Image 
            src={image_url}
            alt="restaurant-image"
            width={100}
            height={100}
            style={{ marginRight: "5em", marginTop: ".25em"}}/>
        <Card.Body>
            <p>{display_phone}</p>
            <p>{location.city}, {location.state}</p>
            <p>{price}</p>
        </Card.Body>
    </Card>
    </div>
)
}

export default RestaurantCard