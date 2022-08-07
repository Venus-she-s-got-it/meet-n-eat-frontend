import React from 'react'
import { Card, Dropdown, Button,  } from 'react-bootstrap'

const CoordinateMeetup = ( {username, name, profile} ) => {

return (
    <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Card.Body>
            <Card.Title>Coordinate Meet 'n Eat with friends</Card.Title>
            <Dropdown>
                <Dropdown.Toggle style={{ width:'100%' }}  variant="secondary" id="dropdown-basic">
                    Choose Friend
                </Dropdown.Toggle>
                <Dropdown.Menu>

                    {/* NEED TO MAP FRIENDS */}
                    {profile && profile.friends.map((friends) => <Dropdown.Item key={friends._id}> {username} </Dropdown.Item> )}
                </Dropdown.Menu>
                </Dropdown>
            <Dropdown style={{ marginTop:'5%'}}>
                <Dropdown.Toggle style={{ width:'100%' }} variant="secondary" id="dropdown-basic">
                    Choose Restaurant
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {/* NEED TO MAP RESTAURANTS <Message message={message} key={message._id}/> */}
                    {profile && profile.likedrestaurants.map((restaurant) => <Dropdown.Item restaurant={restaurant} key={restaurant._id}> {name} </Dropdown.Item> )}
                </Dropdown.Menu>
            </Dropdown>
            <input type='date'></input>
            <Button style={{ width:'100%', marginTop:'5%' }} variant="success" id="button-addon2"> Invite </Button>
        </Card.Body>
    </Card>
)
}

export default CoordinateMeetup
