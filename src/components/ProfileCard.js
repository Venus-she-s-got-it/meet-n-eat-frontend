import React from 'react'
import MyProfile from '../pages/MyProfile'
import { Card, ListGroup } from 'react-bootstrap'

const ProfileCard = ( {username, location} ) => {

return (
    <Card style={{ width: '90%', padding:'3%' }}>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
        <Card.Body>
            <Card.Title>{username}</Card.Title>
                {/* need to fix location */}
            <Card.Text> {location} </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <p style={{ textAlign:'center', fontWeight:'500' }}>About</p>
            <Card.Body>
                <ListGroup.Item>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroup.Item>
            </Card.Body>
        </ListGroup>
    </Card>
)
}

export default ProfileCard