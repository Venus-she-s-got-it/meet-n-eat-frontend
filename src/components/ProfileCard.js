import React from 'react'
import MyProfile from '../pages/MyProfile'
import { Card, ListGroup } from 'react-bootstrap'

const ProfileCard = ( {username, location, profileimg, about} ) => {

return (
    <Card style={{ width: '90%', padding:'3%' }}>
        <Card.Img variant="top" src={profileimg} />
        <Card.Body>
            <Card.Title>{username}</Card.Title>
                {/* need to fix location */}
            <Card.Text> {location} </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <p style={{ textAlign:'center', fontWeight:'500' }}>About</p>
            <Card.Body>
                <ListGroup.Item>{about}</ListGroup.Item>
            </Card.Body>
        </ListGroup>
    </Card>
)
}

export default ProfileCard