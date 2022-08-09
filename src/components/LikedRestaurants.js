import React from 'react'
import { Button, InputGroup, Form } from 'react-bootstrap'
import { useState } from 'react'
import RestaurantCard from './RestaurantCard';

const LikedRestaurant = ( {restaurantlist} ) => {

    const [searchCharacters, setSearchCharacters] = useState('')
    const restaurant = restaurantlist;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
        <InputGroup style={{ margin:'2%', width:'90%', marginTop:'10%'}} className="mb-3">
        <InputGroup.Text id="basic-addon2">Enter Name</InputGroup.Text>
            <Form.Control onChange={e => {
                    setSearchCharacters(e.target.value
                        )}
                    } type={true} placeholder="Liked restaurants" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </InputGroup>
                <div style={{ padding:'5%', overflow:'scroll', overflowX:'hidden', maxHeight:'76%', display:'flex', flexDirection:'column', alignItems:'center' }}>
                    {restaurantlist && restaurantlist.filter((restaurant) => {
                    if (searchCharacters == ''){
                        return restaurant
                    } else if (restaurant.name.toLowerCase().includes(searchCharacters.toLocaleLowerCase())) {
                        return restaurant
                    }   
                }).map(restaurant => <RestaurantCard key={restaurant._id} restaurant={restaurant}/> )}
                </div>
                <div style={{display:'flex' }}>
                    <a style={{ margin:'0 auto', textAlign:'center'}} href=''>Browse Restaurants</a>
                </div>
        
    </div>
)
}

export default LikedRestaurant