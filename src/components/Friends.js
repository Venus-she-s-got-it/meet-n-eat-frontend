import React from 'react'
import { Card, InputGroup, Form, Button, ListGroup } from 'react-bootstrap'
import FriendCard from './FriendCard'

const Friends = ( {profileExample} ) => {

    const friends = profileExample[0].friends;
return (
    <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <Card.Body>
            <Card.Body style={{width:'100%', heigth:'70%'}}>
            <div>
                <InputGroup style={{ margin:'2%', width:'90%'}} className="mb-3">
                <Form.Control placeholder="Search Friends" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <Button variant="outline-secondary" id="button-addon2"> Search </Button>
                </InputGroup>
                {friends && friends.map(friend =>  <FriendCard key={friend._id} friend={friend} />)}
            </div>
            </Card.Body>
        </Card.Body>
        <Card.Link href="#">Browse Friends</Card.Link>
    </Card>
)
}

export default Friends