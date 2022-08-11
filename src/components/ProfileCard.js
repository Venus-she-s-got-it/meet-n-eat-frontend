import React from 'react'
import MyProfile from '../pages/MyProfile'
import { Card, ListGroup } from 'react-bootstrap'

const ProfileCard = ( {username, location, profileimg, about} ) => {

return (
    
    <Card style={{ width: '90%', padding:'3%', border:'none'}}>
        <Card.Img style={{borderRadius:'50%', border:'1px solid #D6300F'}} variant="top" src={profileimg} />
        <Card.Body style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <Card.Title style={{borderTop:'1px solid #D6300F', width:'80%', textAlign:'center',paddingTop:'3%'}}>{username}</Card.Title>
                {/* need to fix location */}
            <Card.Text> {location} </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <p style={{ textAlign:'center', fontWeight:'500' }}>about</p>
            <Card.Body>
                <ListGroup.Item style={{ border:'1px solid #D6300F'}}>{about}</ListGroup.Item>
            </Card.Body>
        </ListGroup>
    </Card>
)
}

export default ProfileCard