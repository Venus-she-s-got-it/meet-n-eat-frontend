import React from 'react'
import { Card, Button, InputGroup, Offcanvas, ListGroup, Form } from 'react-bootstrap'
import { useState } from 'react'
import RestaurantCard from './RestaurantCard';

const LikedRestaurant = ( {restaurantlist} ) => {

    const restaurant = restaurantlist;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
    <div style={{}}>
        <InputGroup style={{ margin:'2%', width:'90%', marginTop:'10%'}} className="mb-3">
            <Form.Control placeholder="Liked restaurants" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
            <Button variant="outline-secondary" id="button-addon2"> Search </Button>
        </InputGroup>
                <div style={{ padding:'5%', overflow:'scroll', overflowX:'hidden', maxHeight:'76%', display:'flex', flexDirection:'column', alignItems:'center' }}>
                    {restaurantlist && restaurantlist.map(restaurant => <RestaurantCard key={restaurant._id} restaurant={restaurant}/> )}
                </div>
                <div style={{display:'flex' }}>
                    <a style={{ margin:'0 auto', textAlign:'center'}} href=''>Browse Restaurants</a>
                </div>
        
    </div>
)
}

export default LikedRestaurant