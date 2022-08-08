import React, { useEffect } from 'react'
import { Card, Dropdown, Button, Form  } from 'react-bootstrap'
import { useState } from 'react'

const CoordinateMeetup = ( {username, name, profile, friends} ) => {

    const [value, setValue ] = useState('Choose Friend')
    const [therestaurant, setTheRestaurant] = useState('Choose Restaurant')
    const [date, setDate] = useState(null)
    const [hour, setHour] = useState(null)

    const handleSelect = (e) => {
        console.log(e)
        setValue(e)
    }
    const handleRestaurant = (e) => {
        console.log(e)
        setTheRestaurant(e)
    }
    const handleDate = (e) => {
        console.log(e.target.value)
        setDate(e.target.value)
    }
    const handleHour = (e) => {
        console.log(e.target.value)
        setHour(e.target.value)
    }


return (
    <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Card.Body>
            <Card.Title>Coordinate Meet 'n Eat with friends</Card.Title>
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', width:'105%', alignItems:'self-end'}}>
                <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle style={{ width:'100%' }}  variant="secondary" id="dropdown-basic">
                        {value}
                    </Dropdown.Toggle>
                    <Dropdown.Menu  >
                        {/* NEED TO MAP FRIENDS */}
                        {friends && friends.map(friend => <Dropdown.Item eventKey={friend.username} key={friend._id}> {friend.username} </Dropdown.Item>)}
                    </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={handleRestaurant} style={{ marginTop:'5%'}}>
                    <Dropdown.Toggle style={{ width:'100%' }} variant="secondary" id="dropdown-basic">
                        { therestaurant }
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {/* NEED TO MAP RESTAURANTS <Message message={message} key={message._id}/> */}
                        {profile && profile.likedrestaurants.map((restaurant) => <Dropdown.Item eventKey={restaurant.name} restaurant={restaurant} key={restaurant._id}> {name} </Dropdown.Item> )}
                    </Dropdown.Menu>
                </Dropdown>
            <input onChange={handleDate} type='date'></input>
            <input onChange={handleHour} type='time' ></input>
            </div>
            <Button style={{ width:'100%', marginTop:'5%' }} variant="success" id="button-addon2"> Invite </Button>
        </Card.Body>
    </Card>
)
}

export default CoordinateMeetup
