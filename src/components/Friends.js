import React from 'react'
import { Card, InputGroup, Form, Button, ListGroup } from 'react-bootstrap'

const Friends = ( {username, displayname} ) => {

return (
    <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Card.Body>
            <InputGroup style={{ margin:'2%', width:'90%'}} className="mb-3">
                <Form.Control placeholder="Search Friends" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <Button variant="outline-secondary" id="button-addon2"> Search </Button>
            </InputGroup>
                <Card.Body style={{ border:'1px solid gray', width:'100%', heigth:'70%'}}>
                    <div>

                        {/* card to map */}
                    <Card style={{ width: '100%',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'1%' }}>
                        <div style={{ width:'20%'}} >      
                        <Card.Img style={{ width:'90%', borderRadius:'5px' }} variant="top" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/>
                        </div>
                        <Card.Body>
                            <Card.Text>{username}</Card.Text>
                        </Card.Body>
                            <ListGroup.Item>{displayname}</ListGroup.Item>
                    </Card>
                    </div>
                </Card.Body>
            </Card.Body>
            <Card.Link href="#">Browse Friends</Card.Link>
    </Card>
)
}

export default Friends